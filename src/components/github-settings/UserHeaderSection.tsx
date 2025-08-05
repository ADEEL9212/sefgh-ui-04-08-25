import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const UserHeaderSection = () => {
  return (
    <div className="border-b border-border bg-card px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder-avatar.png" alt="ADEEL9212" />
            <AvatarFallback className="bg-muted text-xl font-semibold">AD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-semibold text-foreground">ADEEL9212</h1>
            <p className="text-sm text-muted-foreground">Personal account</p>
          </div>
        </div>
        <Button variant="outline" className="gap-2">
          View profile
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default UserHeaderSection;