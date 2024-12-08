import { startOfWeek, addDays, parseISO, setHours, setMinutes } from 'date-fns';
import { Post } from '@/types/calendar';

export function getWeekDays(currentDate: Date): Date[] {
  const start = startOfWeek(currentDate, { weekStartsOn: 1 });
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

export function getPostsByDay(posts: Post[], weekDays: Date[]) {
  return weekDays.map(day => ({
    date: day,
    posts: posts
      .filter(post => 
        post.scheduledDate.getFullYear() === day.getFullYear() &&
        post.scheduledDate.getMonth() === day.getMonth() &&
        post.scheduledDate.getDate() === day.getDate()
      )
      .sort((a, b) => a.scheduledDate.getTime() - b.scheduledDate.getTime())
  }));
}

export function updatePostDate(post: Post, sourceDate: string, destinationDate: string): Date {
  const destinationDateObj = parseISO(destinationDate);
  
  return setMinutes(
    setHours(
      destinationDateObj,
      post.scheduledDate.getHours()
    ),
    post.scheduledDate.getMinutes()
  );
}