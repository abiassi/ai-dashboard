import React from 'react';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';

const mockScheduledPosts = [
  {
    id: 1,
    content: "Big announcement coming tomorrow! Stay tuned! 🎉",
    scheduledDate: new Date(2024, 0, 15, 14, 30),
    image: "https://picsum.photos/200/200?random=3",
  },
  {
    id: 2,
    content: "Check out our latest blog post on AI trends in 2024!",
    scheduledDate: new Date(2024, 0, 16, 10, 0),
    image: "https://picsum.photos/200/200?random=4",
  },
];

export function ScheduledPosts() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Scheduled Posts</h1>
      <div className="grid gap-6">
        {mockScheduledPosts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <div className="flex gap-4">
              <img
                src={post.image}
                alt="Post thumbnail"
                className="h-32 w-32 rounded-md object-cover"
              />
              <div className="flex-1">
                <div className="mb-2 flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {format(post.scheduledDate, "PPP 'at' p")}
                </div>
                <p className="text-lg">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}