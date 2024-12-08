import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GeneratedPosts } from '@/pages/generated-posts';
import { ScheduledPosts } from '@/pages/scheduled-posts';
import { Settings } from '@/pages/settings';
import { Home } from '@/pages/home';
import { CalendarView } from '@/pages/calendar-view';

export function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto p-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generated" element={<GeneratedPosts />} />
        <Route path="/scheduled" element={<CalendarView />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
  );
}