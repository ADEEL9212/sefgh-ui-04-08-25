import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Monitor, Moon, Sun, Contrast } from 'lucide-react';

const AppearanceSettings = () => {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Appearance</h1>
        <p className="text-muted-foreground">
          Customize how GitHub looks and feels for you.
        </p>
      </div>

      {/* Theme Preference */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Theme preference</CardTitle>
          <CardDescription>
            Choose how GitHub looks to you. Select a single theme, or sync with your system and automatically switch between day and night themes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="border-2 border-primary rounded-lg p-4 bg-card cursor-pointer">
                <div className="flex items-center justify-center h-16 bg-muted rounded mb-2">
                  <Monitor className="h-6 w-6 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-center">Sync with system</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="border rounded-lg p-4 bg-card cursor-pointer hover:border-border">
                <div className="flex items-center justify-center h-16 bg-white rounded mb-2">
                  <Sun className="h-6 w-6 text-yellow-500" />
                </div>
                <p className="text-sm font-medium text-center">Light</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="border rounded-lg p-4 bg-card cursor-pointer hover:border-border">
                <div className="flex items-center justify-center h-16 bg-gray-900 rounded mb-2">
                  <Moon className="h-6 w-6 text-gray-300" />
                </div>
                <p className="text-sm font-medium text-center">Dark</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Color Mode */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Color mode</CardTitle>
          <CardDescription>
            Choose how colors are displayed in dark mode.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select defaultValue="dark">
            <SelectTrigger className="max-w-md">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dark">Dark default</SelectItem>
              <SelectItem value="dark-dimmed">Dark dimmed</SelectItem>
              <SelectItem value="dark-high-contrast">Dark high contrast</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Text Size */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Text size</CardTitle>
          <CardDescription>
            Change the size of text in GitHub.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select defaultValue="medium">
            <SelectTrigger className="max-w-md">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Motion */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Motion</CardTitle>
          <CardDescription>
            Control the amount of motion in the interface.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between max-w-md">
            <div className="space-y-1">
              <Label className="text-sm font-medium">Reduce motion</Label>
              <p className="text-xs text-muted-foreground">
                Disable animations and auto-playing videos.
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppearanceSettings;