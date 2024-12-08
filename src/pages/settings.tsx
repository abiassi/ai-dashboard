import React from 'react';
import { Button } from '@/components/ui/button';

export function Settings() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="max-w-2xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Account Settings</h2>
          <div className="rounded-lg border p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Notifications</label>
                <select className="w-full rounded-md border p-2">
                  <option>All notifications</option>
                  <option>Important only</option>
                  <option>None</option>
                </select>
              </div>
              <Button>Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}