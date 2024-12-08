import React from 'react';
import { Button } from '@/components/ui/button';
import { Edit2, Calendar, Trash2 } from 'lucide-react';

const mockPosts = [
  {
    id: 1,
    content: "Excited to announce our latest AI-powered features! 🚀 #Innovation #Tech",
    image: "https://picsum.photos/200/200?random=1",
  },
  {
    id: 2,
    content: "Join us for a live webinar on the future of artificial intelligence. Register now! 📅",
    image: "https://picsum.photos/200/200?random=2",
  },
];

export function GeneratedPosts() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Generated Posts</h1>
      <div className="grid gap-6">
        {mockPosts.map((post) => (
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
              <div className="flex-1 space-y-4">
                <p className="text-lg">{post.content}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Discard
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}