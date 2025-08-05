import React from 'react';
import { Search, Bell, Plus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const GitHubHeader = () => {
  return (
    <header className="border-b border-border bg-card px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left section - Logo and navigation */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <svg
              className="h-8 w-8 fill-white"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <span className="text-lg font-semibold text-foreground">GitHub</span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search or jump to..."
              className="pl-10 bg-surface border-border focus:border-ring"
            />
          </div>
        </div>

        {/* Right section - User controls */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            <ChevronDown className="h-3 w-3" />
          </Button>
          
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.png" alt="ADEEL9212" />
              <AvatarFallback className="bg-muted text-sm">AD</AvatarFallback>
            </Avatar>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default GitHubHeader;