'use client';

import { useState, useMemo } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Chip,
  Tooltip,
  Paper,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  Add as AddIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  Launch as LaunchIcon,
  Link as LinkIcon,
} from '@mui/icons-material';
import Image from 'next/image';
import { Blog } from '../types/blog';

interface BlogsSectionProps {
  isActive: boolean;
  blogsData: Blog[];
  isLoading: boolean;
  error: string | null;
  onCreate: () => void;
  onEdit: (blog: Blog) => void;
  onDelete: (id: string) => void;
  refetch?: () => void;
}

const BRAND_RED = '#D01818';
const BRAND_RED_HOVER = '#b01414';
const PUBLIC_SITE_URL = 'https://carsnbike.com/blog';

export default function BlogsSection({
  isActive,
  blogsData,
  isLoading,
  error,
  onCreate,
  onEdit,
  onDelete,
}: BlogsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = useMemo(() => {
    const data = Array.isArray(blogsData) ? blogsData : [];
    if (!searchQuery) return data;
    const query = searchQuery.toLowerCase();
    return data.filter(
      (blog) =>
        (blog.title || '').toLowerCase().includes(query) ||
        (blog.author || '').toLowerCase().includes(query) ||
        (blog.category || '').toLowerCase().includes(query) ||
        (blog.slug || '').toLowerCase().includes(query)
    );
  }, [blogsData, searchQuery]);

  if (!isActive) return null;

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress sx={{ color: BRAND_RED }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={4}>
        <Alert severity="error" variant="filled" sx={{ borderRadius: 2 }}>
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ animation: 'fadeIn 0.5s ease-in-out' }}>
      {/* Header & Search Area */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 3,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'center' },
          gap: 2,
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(208, 24, 24, 0.1)',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a1a1a', mb: 0.5 }}>
            Blogs Management
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Create, edit, and manage your website's blog posts
          </Typography>
        </Box>

        <TextField
          size="small"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            width: { xs: '100%', md: 300 },
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              bgcolor: 'white',
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: BRAND_RED },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: BRAND_RED },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" sx={{ color: BRAND_RED }} />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onCreate}
          sx={{
            bgcolor: BRAND_RED,
            borderRadius: 2,
            px: 3,
            py: 1,
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              bgcolor: BRAND_RED_HOVER,
              transform: 'translateY(-2px)',
              boxShadow: `0 4px 12px rgba(208, 24, 24, 0.3)`,
            },
            transition: 'all 0.2s',
          }}
        >
          Create New Blog
        </Button>
      </Paper>

      {/* Blog Content */}
      {filteredBlogs.length === 0 ? (
        <Box
          sx={{
            textAlign: 'center',
            py: 10,
            bgcolor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 4,
            border: '2px dashed rgba(208, 24, 24, 0.2)',
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {searchQuery ? `No blogs matching "${searchQuery}"` : 'No blogs available yet.'}
          </Typography>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={onCreate}
            sx={{
              mt: 2,
              color: BRAND_RED,
              borderColor: BRAND_RED,
              '&:hover': { borderColor: BRAND_RED_HOVER, bgcolor: 'rgba(208, 24, 24, 0.04)' },
            }}
          >
            {searchQuery ? 'Clear Search' : 'Create Your First Blog'}
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {filteredBlogs.map((blog) => (
            <Card
              key={blog.id}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid #eee',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                  '& .blog-actions': { opacity: 1 },
                },
              }}
            >
              {/* Image & Overlay Actions */}
              <Box sx={{ position: 'relative', height: 200, width: '100%' }}>
                <Image
                  src={blog.blog_image || '/no-image.jpg'}
                  alt={blog.title || 'Blog Image'}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                />
                <Box
                  className="blog-actions"
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    display: 'flex',
                    gap: 1,
                    opacity: { xs: 1, md: 0 },
                    transition: 'opacity 0.2s',
                    zIndex: 2,
                  }}
                >
                  <Tooltip title="View Live">
                    <IconButton
                      size="small"
                      component="a"
                      href={`${PUBLIC_SITE_URL}/${blog.slug}`}
                      target="_blank"
                      sx={{
                        bgcolor: 'white',
                        color: BRAND_RED,
                        '&:hover': { bgcolor: '#fff0f0' },
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      <LaunchIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit Blog">
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEdit(blog);
                      }}
                      sx={{
                        bgcolor: 'white',
                        color: '#1a1a1a',
                        '&:hover': { bgcolor: '#f5f5f5', color: BRAND_RED },
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Blog">
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(blog.id);
                      }}
                      sx={{
                        bgcolor: 'white',
                        color: BRAND_RED,
                        '&:hover': { bgcolor: '#fff0f0' },
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    zIndex: 2,
                  }}
                >
                  <Chip
                    label={blog.category || 'Uncategorized'}
                    size="small"
                    sx={{
                      bgcolor: BRAND_RED,
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    }}
                  />
                </Box>
              </Box>

              {/* Content */}
              <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <PersonIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, color: '#333' }}>
                      {blog.author || 'Anonymous'}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 'auto' }}>
                    <CalendarIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                    <Typography variant="caption" color="text.secondary">
                      {blog.created_at
                        ? new Date(blog.created_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })
                        : 'No date'}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.3,
                    mb: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    height: '3.125rem',
                    color: '#1a1a1a',
                  }}
                >
                  {blog.title || 'Untitled Blog'}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                  <LinkIcon sx={{ fontSize: 14, color: BRAND_RED }} />
                  <Typography
                    variant="caption"
                    sx={{
                      color: BRAND_RED,
                      fontWeight: 500,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    /{blog.slug || 'no-path'}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.6,
                    fontSize: '0.875rem',
                  }}
                >
                  {blog.short_description || 'No description available.'}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}



