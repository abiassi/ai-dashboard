import React from 'react';

export function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome to Social Media AI</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Generated Posts</h2>
          <p className="text-muted-foreground">
            View and manage your AI-generated social media posts
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Scheduled Posts</h2>
          <p className="text-muted-foreground">
            Schedule and organize your upcoming posts
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Analytics</h2>
          <p className="text-muted-foreground">
            Track the performance of your posts
          </p>
        </div>
      </div>
    </div>
  );
}