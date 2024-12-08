import React, { useMemo, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { CalendarHeader } from '@/components/calendar/calendar-header';
import { DayColumn } from '@/components/calendar/day-column';
import { PostDetailsModal } from '@/components/post/post-details-modal';
import { useCalendarStore } from '@/lib/store/calendar-store';
import { getWeekDays, getPostsByDay, updatePostDate } from '@/lib/utils/date';
import { Post } from '@/types/calendar';

export function CalendarView() {
  const { currentDate, posts, setCurrentDate, nextWeek, prevWeek, movePost } = useCalendarStore();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const weekDays = useMemo(() => getWeekDays(currentDate), [currentDate]);
  const postsByDay = useMemo(() => getPostsByDay(posts, weekDays), [weekDays, posts]);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const post = posts.find(p => p.id === result.draggableId);
    if (!post) return;

    const newDate = updatePostDate(
      post,
      result.source.droppableId,
      result.destination.droppableId
    );

    movePost(post.id, newDate);
  };

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleEditPost = (post: Post) => {
    // TODO: Implement edit functionality
    console.log('Edit post:', post);
  };

  const handleDeletePost = (post: Post) => {
    // TODO: Implement delete functionality
    console.log('Delete post:', post);
  };

  return (
    <div className="space-y-4">
      <CalendarHeader
        currentDate={currentDate}
        onPrevWeek={prevWeek}
        onNextWeek={nextWeek}
        onToday={() => setCurrentDate(new Date())}
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-7 border rounded-lg overflow-hidden bg-background h-[calc(100vh-12rem)]">
          {postsByDay.map(({ date, posts }) => (
            <DayColumn 
              key={date.toISOString()} 
              date={date} 
              posts={posts}
              onPostClick={handlePostClick}
            />
          ))}
        </div>
      </DragDropContext>

      <PostDetailsModal
        post={selectedPost}
        isOpen={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
        onEdit={handleEditPost}
        onDelete={handleDeletePost}
      />
    </div>
  );
}