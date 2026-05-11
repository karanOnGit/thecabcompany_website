import '../styles/blog-form.css';

export default function DeleteConfirmModal({ open, onClose, onConfirm, title, loading }) {
    if (!open) return null;
    return (
        <div className="bfm-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
            <div className="bfm-confirm">
                <div className="bfm-confirm__icon">🗑️</div>
                <h3 className="bfm-confirm__title">Delete Blog?</h3>
                <p className="bfm-confirm__body">
                    Are you sure you want to delete
                    <strong> "{title || 'this blog'}"</strong>?
                    <br />
                    <span style={{ opacity: 0.5, fontSize: '0.85rem' }}>This action cannot be undone.</span>
                </p>
                <div className="bfm-confirm__actions">
                    <button className="bfm-btn bfm-btn--ghost" onClick={onClose} disabled={loading}>
                        Cancel
                    </button>
                    <button className="bfm-btn bfm-btn--danger" onClick={onConfirm} disabled={loading}>
                        {loading ? <span className="bfm-btn-spinner" /> : 'Delete'}
                    </button>
                </div>
            </div>
        </div>
    );
}
