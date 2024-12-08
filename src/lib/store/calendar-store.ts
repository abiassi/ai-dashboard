import { create } from 'zustand';
import { startOfWeek, addDays, addWeeks, subWeeks } from 'date-fns';
import { Post } from '@/types/calendar';

interface CalendarState {
  currentDate: Date;
  posts: Post[];
  setCurrentDate: (date: Date) => void;
  nextWeek: () => void;
  prevWeek: () => void;
  movePost: (postId: string, newDate: Date) => void;
}

const mockPosts: Post[] = [
  {
    id: '1',
    content: "🚀 Just launched our new AI-powered content generator! Check it out at example.com/launch #AI #Innovation",
    scheduledDate: new Date(2024, 0, 15, 14, 30),
    image: "https://picsum.photos/200/200?random=1",
    platforms: ['Twitter', 'LinkedIn'],
    status: 'approved',
    generatedBy: 'ContentGPT v1.0'
  },
  {
    id: '2',
    content: "📅 Join us tomorrow for an exclusive webinar on 'The Future of AI in Social Media' - Register now!",
    scheduledDate: new Date(2024, 0, 16, 10, 0),
    image: "https://picsum.photos/200/200?random=2",
    platforms: ['LinkedIn', 'Facebook'],
    status: 'pending',
    generatedBy: 'EventGPT v2.0'
  },
  {
    id: '3',
    content: "🎯 Our AI algorithm just hit 99% accuracy in content optimization! Here's how we did it...",
    scheduledDate: new Date(2024, 0, 17, 9, 0),
    image: "https://picsum.photos/200/200?random=3",
    platforms: ['Twitter', 'LinkedIn'],
    status: 'needs_changes',
    generatedBy: 'StatsGPT v1.0'
  },
  {
    id: '4',
    content: "💡 Pro tip: Use our AI assistant to schedule your posts at optimal times for maximum engagement",
    scheduledDate: new Date(2024, 0, 17, 15, 45),
    image: "https://picsum.photos/200/200?random=4",
    platforms: ['Instagram', 'Facebook'],
    status: 'approved',
    generatedBy: 'TipsGPT v1.0'
  },
  {
    id: '5',
    content: "📊 January performance report: AI-optimized posts showed 3x more engagement! Learn more in our latest case study",
    scheduledDate: new Date(2024, 0, 18, 11, 30),
    image: "https://picsum.photos/200/200?random=5",
    platforms: ['LinkedIn'],
    status: 'pending',
    generatedBy: 'AnalyticsGPT v2.0'
  },
  {
    id: '6',
    content: "🎉 Weekend special: Get 20% off on our AI Social Media Manager subscription! Use code WEEKEND20",
    scheduledDate: new Date(2024, 0, 19, 16, 0),
    image: "https://picsum.photos/200/200?random=6",
    platforms: ['Twitter', 'Facebook', 'Instagram'],
    status: 'approved',
    generatedBy: 'PromoGPT v1.0'
  },
  {
    id: '7',
    content: "🤖 Meet Sarah, our new AI content specialist! She'll be sharing weekly tips on optimizing your social media strategy",
    scheduledDate: new Date(2024, 0, 20, 12, 0),
    image: "https://picsum.photos/200/200?random=7",
    platforms: ['Twitter', 'LinkedIn'],
    status: 'approved',
    generatedBy: 'ContentGPT v1.0'
  }
];

export const useCalendarStore = create<CalendarState>((set) => ({
  currentDate: new Date(2024, 0, 15),
  posts: mockPosts,
  setCurrentDate: (date) => set({ currentDate: date }),
  nextWeek: () => set((state) => ({ currentDate: addWeeks(state.currentDate, 1) })),
  prevWeek: () => set((state) => ({ currentDate: subWeeks(state.currentDate, 1) })),
  movePost: (postId, newDate) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? { ...post, scheduledDate: newDate }
          : post
      ),
    })),
}));