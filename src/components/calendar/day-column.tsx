import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { format } from 'date-fns';
import { PostCard } from './post-card';
import { Post } from '@/types/calendar';

interface DayColumnProps {
  date: Date;
  posts: Post[];
  onPostClick?: (post: Post) => void;
}

export const DayColumn = React.memo(({ date, posts, onPostClick }: DayColumnProps) => {
  const droppableId = format(date, 'yyyy-MM-dd');

  return (
    <div className="flex flex-col h-full border-r last:border-r-0">
      <div className="p-2 text-center border-b bg-muted/10">
        <div className="font-medium">{format(date, 'EEE')}</div>
        <div className="text-sm text-muted-foreground">{format(date, 'MMM d')}</div>
      </div>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex-1 p-2 overflow-y-auto transition-colors ${
              snapshot.isDraggingOver ? 'bg-muted/20' : ''
            }`}
          >
            {posts.map((post, index) => (
              <PostCard 
                key={post.id}
                post={post} 
                index={index}
                onClick={onPostClick}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
});