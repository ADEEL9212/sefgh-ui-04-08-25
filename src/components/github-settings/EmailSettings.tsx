import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Mail, Check, X } from 'lucide-react';

const EmailSettings = () => {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Emails</h1>
        <p className="text-muted-foreground">
          Manage your email addresses and email preferences.
        </p>
      </div>

      {/* Primary Email */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Primary email address</CardTitle>
          <CardDescription>
            Your primary email address will be used for notifications and password resets.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-muted rounded-md">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="font-medium">adeel@example.com</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3 w-3 text-green-500" />
                  <span>Verified</span>
                  <span>•</span>
                  <span>Primary</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Email */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Add email address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 max-w-md">
            <Input placeholder="your-email@example.com" />
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Email Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Email preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-sm font-medium">Comments on Issues and Pull Requests</Label>
              <p className="text-xs text-muted-foreground">
                Receive emails when someone comments on issues or pull requests you're watching.
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-sm font-medium">Pull Request reviews</Label>
              <p className="text-xs text-muted-foreground">
                Receive emails when someone requests your review on a pull request.
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-sm font-medium">Pull Request pushes</Label>
              <p className="text-xs text-muted-foreground">
                Receive emails when commits are pushed to a pull request you're watching.
              </p>
            </div>
            <Switch />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Weekly digest email</Label>
            <Select defaultValue="enabled">
              <SelectTrigger className="max-w-md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="enabled">Send weekly digest</SelectItem>
                <SelectItem value="disabled">Don't send weekly digest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Email Visibility */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Email visibility</CardTitle>
          <CardDescription>
            Choose which email address to display on your commits and other Git operations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Commit email address</Label>
            <Select defaultValue="adeel@example.com">
              <SelectTrigger className="max-w-md">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="adeel@example.com">adeel@example.com</SelectItem>
                <SelectItem value="noreply">Keep my email address private</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between max-w-md">
            <div className="space-y-1">
              <Label className="text-sm font-medium">Keep my email addresses private</Label>
              <p className="text-xs text-muted-foreground">
                We'll remove your public profile email and use a private email for Git operations.
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailSettings;