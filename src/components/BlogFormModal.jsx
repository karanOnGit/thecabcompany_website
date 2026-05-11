import { useState, useEffect } from 'react';
import '../styles/blog-form.css';

const API_BASE = 'https://api.carsnbike.com/api/blog';

const CATEGORIES = ['News', 'Reviews', 'Tips & Tricks', 'Technology', 'Events', 'Comparisons', 'Guides'];
const STATUSES   = ['published', 'draft'];
const VISIBILITIES = ['public', 'private'];

const generateSlug = (text) =>
    text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const EMPTY_FORM = {
    title: '',
    slug: '',
    meta_title: '',
    meta_description: '',
    meta_keyword: '',      // comma-separated string in UI → array on submit
    tags: '',              // comma-separated string in UI → array on submit
    short_description: '',
    author: '',
    category: '',
    blog_image: '',
    body_text: '',         // rich HTML content
    status: 'published',
    visibility: 'public',
    pinned: false,
    slugEdited: false,
};

export default function BlogFormModal({ open, onClose, blog, onSuccess }) {
    const isEdit = Boolean(blog?.id);
    const [form, setForm] = useState(EMPTY_FORM);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [previewImage, setPreviewImage] = useState('');

    // Populate form when editing
    useEffect(() => {
        if (!open) return;
        if (blog) {
            setForm({
                title:             blog.title            ?? '',
                slug:              blog.slug             ?? '',
                meta_title:        blog.meta_title       ?? '',
                meta_description:  blog.meta_description ?? '',
                meta_keyword:      (blog.meta_keyword ?? []).join(', '),
                tags:              (blog.tags ?? []).join(', '),
                short_description: blog.short_description ?? '',
                author:            blog.author           ?? '',
                category:          blog.category         ?? '',
                blog_image:        blog.blog_image        ?? '',
                body_text:         blog.body_text ?? blog.detail_description ?? '',
                status:            blog.status            ?? 'published',
                visibility:        blog.visibility        ?? 'public',
                pinned:            blog.pinned            ?? false,
                slugEdited: true,
            });
            setPreviewImage(blog.blog_image ?? '');
        } else {
            setForm(EMPTY_FORM);
            setPreviewImage('');
        }
        setError(null);
    }, [blog, open]);

    const set = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

    const handleTitleChange = (value) => {
        setForm(prev => ({
            ...prev,
            title: value,
            slug: prev.slugEdited ? prev.slug : generateSlug(value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const payload = {
            title:             form.title,
            slug:              form.slug,
            meta_title:        form.meta_title,
            meta_description:  form.meta_description,
            meta_keyword:      form.meta_keyword.split(',').map(s => s.trim()).filter(Boolean),
            tags:              form.tags.split(',').map(s => s.trim()).filter(Boolean),
            short_description: form.short_description,
            author:            form.author,
            category:          form.category || undefined,
            blog_image:        form.blog_image,
            body_text:         form.body_text,
            detail_description: form.body_text,   // send both to be safe
            status:            form.status,
            visibility:        form.visibility,
            pinned:            form.pinned,
        };

        try {
            const url    = isEdit ? `${API_BASE}/${blog.id}` : `${API_BASE}/`;
            const method = isEdit ? 'PUT' : 'POST';

            const res  = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const json = await res.json();
            if (!res.ok) throw new Error(json.message || json.detail || 'Failed to save');

            onSuccess(json.blog || json.data || json);
            onClose();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!open) return null;

    return (
        <div className="bfm-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="bfm-modal">
                {/* Header */}
                <div className="bfm-header">
                    <h2 className="bfm-title">{isEdit ? '✏️ Edit Blog' : '✨ Create New Blog'}</h2>
                    <button className="bfm-close" onClick={onClose} title="Close">✕</button>
                </div>

                {/* Error banner */}
                {error && <div className="bfm-error">⚠ {error}</div>}

                {/* Image preview */}
                {previewImage && (
                    <div className="bfm-img-preview">
                        <img src={previewImage} alt="Preview" onError={e => e.target.style.display='none'} />
                    </div>
                )}

                <form className="bfm-form" onSubmit={handleSubmit}>
                    <div className="bfm-scroll">

                        {/* Row: Title + Slug */}
                        <div className="bfm-row bfm-row--2">
                            <div className="bfm-field">
                                <label className="bfm-label">Title *</label>
                                <input
                                    className="bfm-input"
                                    value={form.title}
                                    onChange={e => handleTitleChange(e.target.value)}
                                    placeholder="Blog title..."
                                    required
                                />
                            </div>
                            <div className="bfm-field">
                                <label className="bfm-label">Slug *</label>
                                <input
                                    className="bfm-input bfm-input--mono"
                                    value={form.slug}
                                    onChange={e => { set('slug', generateSlug(e.target.value)); set('slugEdited', true); }}
                                    placeholder="auto-generated-from-title"
                                    required
                                />
                            </div>
                        </div>

                        {/* Row: Author + Category */}
                        <div className="bfm-row bfm-row--2">
                            <div className="bfm-field">
                                <label className="bfm-label">Author *</label>
                                <input
                                    className="bfm-input"
                                    value={form.author}
                                    onChange={e => set('author', e.target.value)}
                                    placeholder="Author name"
                                    required
                                />
                            </div>
                            <div className="bfm-field">
                                <label className="bfm-label">Category</label>
                                <select
                                    className="bfm-select"
                                    value={form.category}
                                    onChange={e => set('category', e.target.value)}
                                >
                                    <option value="">— Select —</option>
                                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                        </div>

                        {/* Blog Image URL */}
                        <div className="bfm-field">
                            <label className="bfm-label">Blog Image URL *</label>
                            <input
                                className="bfm-input"
                                type="url"
                                value={form.blog_image}
                                onChange={e => { set('blog_image', e.target.value); setPreviewImage(e.target.value); }}
                                placeholder="https://..."
                                required
                            />
                        </div>

                        {/* Short Description */}
                        <div className="bfm-field">
                            <label className="bfm-label">Short Description *</label>
                            <textarea
                                className="bfm-textarea"
                                rows={3}
                                value={form.short_description}
                                onChange={e => set('short_description', e.target.value)}
                                placeholder="Brief excerpt shown on blog cards..."
                                required
                            />
                        </div>

                        {/* Row: Status + Visibility */}
                        <div className="bfm-row bfm-row--3">
                            <div className="bfm-field">
                                <label className="bfm-label">Status</label>
                                <select className="bfm-select" value={form.status} onChange={e => set('status', e.target.value)}>
                                    {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <div className="bfm-field">
                                <label className="bfm-label">Visibility</label>
                                <select className="bfm-select" value={form.visibility} onChange={e => set('visibility', e.target.value)}>
                                    {VISIBILITIES.map(v => <option key={v} value={v}>{v}</option>)}
                                </select>
                            </div>
                            <div className="bfm-field bfm-field--toggle">
                                <label className="bfm-label">Pinned</label>
                                <button
                                    type="button"
                                    className={`bfm-toggle${form.pinned ? ' bfm-toggle--on' : ''}`}
                                    onClick={() => set('pinned', !form.pinned)}
                                >
                                    <span className="bfm-toggle__thumb" />
                                </button>
                                <span className="bfm-toggle__label">{form.pinned ? '📌 Yes' : 'No'}</span>
                            </div>
                        </div>

                        {/* Tags + Keywords */}
                        <div className="bfm-row bfm-row--2">
                            <div className="bfm-field">
                                <label className="bfm-label">Tags <span className="bfm-hint">(comma separated)</span></label>
                                <input
                                    className="bfm-input"
                                    value={form.tags}
                                    onChange={e => set('tags', e.target.value)}
                                    placeholder="#EV, #Technology, #India"
                                />
                            </div>
                            <div className="bfm-field">
                                <label className="bfm-label">Meta Keywords <span className="bfm-hint">(comma separated)</span></label>
                                <input
                                    className="bfm-input"
                                    value={form.meta_keyword}
                                    onChange={e => set('meta_keyword', e.target.value)}
                                    placeholder="keyword one, keyword two"
                                />
                            </div>
                        </div>

                        {/* Meta Title */}
                        <div className="bfm-field">
                            <label className="bfm-label">Meta Title</label>
                            <input
                                className="bfm-input"
                                value={form.meta_title}
                                onChange={e => set('meta_title', e.target.value)}
                                placeholder="SEO title (defaults to title if empty)"
                            />
                        </div>

                        {/* Meta Description */}
                        <div className="bfm-field">
                            <label className="bfm-label">Meta Description</label>
                            <textarea
                                className="bfm-textarea"
                                rows={2}
                                value={form.meta_description}
                                onChange={e => set('meta_description', e.target.value)}
                                placeholder="SEO meta description..."
                            />
                        </div>

                        {/* Body Content */}
                        <div className="bfm-field">
                            <label className="bfm-label">
                                Blog Content <span className="bfm-hint">(HTML supported)</span>
                            </label>
                            <textarea
                                className="bfm-textarea bfm-textarea--body"
                                rows={14}
                                value={form.body_text}
                                onChange={e => set('body_text', e.target.value)}
                                placeholder="<h2>Introduction</h2><p>Write your blog content here. HTML is supported.</p>"
                                spellCheck={false}
                            />
                            <p className="bfm-hint-block">
                                💡 You can paste HTML here. Content will be rendered as rich text on the blog page.
                            </p>
                        </div>

                    </div>

                    {/* Footer Actions */}
                    <div className="bfm-footer">
                        <button type="button" className="bfm-btn bfm-btn--ghost" onClick={onClose} disabled={loading}>
                            Cancel
                        </button>
                        <button type="submit" className="bfm-btn bfm-btn--primary" disabled={loading}>
                            {loading
                                ? <span className="bfm-btn-spinner" />
                                : isEdit ? '💾 Update Blog' : '🚀 Publish Blog'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
