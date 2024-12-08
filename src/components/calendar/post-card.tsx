import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { format } from 'date-fns';
import { Clock, Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Post } from '@/types/calendar';

interface PostCardProps {
  post: Post;
  index: number;
  onClick?: (post: Post) => void;
}

const PlatformIcon = {
  Twitter,
  Instagram,
  LinkedIn: Linkedin,
  Facebook,
};

export const PostCard = React.memo(({ post, index, onClick }: PostCardProps) => {
  return (
    <Draggable draggableId={post.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => onClick?.(post)}
          className={`select-none p-3 mb-2 rounded-lg border bg-card shadow-sm cursor-move hover:shadow-md transition-shadow ${
            snapshot.isDragging ? 'shadow-lg ring-2 ring-primary' : ''
          }`}
        >
          {post.image && (
            <div className="pointer-events-none">
              <img
                src={post.image}
                alt="Post thumbnail"
                className="w-full h-24 object-cover rounded-md mb-2"
                draggable={false}
              />
            </div>
          )}
          <p className="text-sm line-clamp-2 mb-2 pointer-events-none">{post.content}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground pointer-events-none">
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {format(post.scheduledDate, 'h:mm a')}
            </div>
            <div className="flex -space-x-1">
              {post.platforms?.map(platform => {
                const Icon = PlatformIcon[platform];
                return (
                  <div
                    key={platform}
                    className="w-5 h-5 rounded-full bg-muted/50 flex items-center justify-center"
                    title={platform}
                  >
                    <Icon className="w-3 h-3" />
                  </div>
                );
              })}
            </div>
          </div>
          {post.status && (
            <div className={`mt-2 text-xs px-1.5 py-0.5 rounded-full w-fit ${
              post.status === 'approved'
                ? 'bg-green-100 text-green-700'
                : post.status === 'pending'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {post.status}
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
});