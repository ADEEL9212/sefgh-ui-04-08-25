import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertTriangle, Download, Trash2 } from 'lucide-react';

const AccountSettings = () => {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Account</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Change Username */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Change username</CardTitle>
          <CardDescription>
            Changing your username can have unintended side effects.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value="ADEEL9212"
              className="max-w-md"
              disabled
            />
          </div>
          <Button variant="outline">Change username</Button>
        </CardContent>
      </Card>

      {/* Export Data */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Export account data</CardTitle>
          <CardDescription>
            Export all repositories and profile metadata for your personal account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Start export
          </Button>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-lg text-destructive">Danger zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-md">
            <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
            <div className="space-y-2">
              <h4 className="font-medium text-destructive">Delete this account</h4>
              <p className="text-sm text-muted-foreground">
                Deleting your account is irreversible and will permanently remove all your repositories, gists, and other data.
              </p>
              <Button variant="destructive" className="gap-2">
                <Trash2 className="h-4 w-4" />
                Delete account
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSettings;