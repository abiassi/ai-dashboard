import React from 'react';
import { format } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Post } from '@/types/calendar';
import { Edit, Trash2, X } from 'lucide-react';

interface PostDetailsModalProps {
  post: Post | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

export function PostDetailsModal({
  post,
  isOpen,
  onClose,
  onEdit,
  onDelete,
}: PostDetailsModalProps) {
  if (!post) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Post Details
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 p-0"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Post Content */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Content</h3>
            <p className="text-sm">{post.content}</p>
          </div>

          {/* Media */}
          {post.image && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">Media</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt="Post media"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          )}

          {/* Schedule */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Scheduled For
            </h3>
            <p className="text-sm">
              {format(post.scheduledDate, 'MMMM d, yyyy h:mm a')}
            </p>
          </div>

          {/* Platforms */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">
              Publishing To
            </h3>
            <div className="flex gap-2">
              {post.platforms?.map((platform) => (
                <div
                  key={platform}
                  className="px-2 py-1 text-xs rounded-full bg-secondary"
                >
                  {platform}
                </div>
              )) ?? (
                <div className="px-2 py-1 text-xs rounded-full bg-secondary">
                  All Platforms
                </div>
              )}
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
            <div className="flex items-center gap-2">
              <div
                className={`px-2 py-1 text-xs rounded-full ${
                  post.status === 'approved'
                    ? 'bg-green-100 text-green-700'
                    : post.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {post.status ?? 'Pending'}
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex justify-between sm:justify-between">
          <Button
            variant="outline"
            onClick={() => onEdit(post)}
            className="flex items-center gap-2"
          >
            <Edit className="h-4 w-4" />
            Edit Post
          </Button>
          <Button
            variant="destructive"
            onClick={() => onDelete(post)}
            className="flex items-center gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Delete Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
