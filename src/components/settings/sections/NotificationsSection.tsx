import React from 'react';
import { SettingsSection, SettingsCard, FormRow } from '../SettingsCard';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Bell, Mail, Smartphone, Monitor } from 'lucide-react';

const NotificationsSection: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [webNotifications, setWebNotifications] = React.useState(true);
  const [mobileNotifications, setMobileNotifications] = React.useState(false);

  const notificationTypes = [
    { id: 'pulls', label: 'Pull requests', description: 'Activity on pull requests you\'re involved with' },
    { id: 'issues', label: 'Issues', description: 'Activity on issues you\'re involved with' },
    { id: 'releases', label: 'Releases', description: 'New releases for repositories you watch' },
    { id: 'discussions', label: 'Discussions', description: 'Activity on discussions you\'re involved with' },
    { id: 'actions', label: 'Actions', description: 'Workflow runs and other Actions activity' },
    { id: 'security', label: 'Security alerts', description: 'Vulnerabilities and security advisories' },
  ];

  return (
    <SettingsSection 
      title="Notifications" 
      description="Configure how you receive notifications about activity on GitHub."
    >
      {/* Notification Delivery */}
      <SettingsCard>
        <FormRow 
          label="Notification delivery"
          description="Choose how you want to receive notifications."
        >
          <div className="space-y-6">
            {/* Email Notifications */}
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1 space-y-3">
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="email-notifications" 
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                  <Label htmlFor="email-notifications" className="text-sm font-medium">
                    Email notifications
                  </Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Receive notifications via email at john@example.com
                </p>
                {emailNotifications && (
                  <Select defaultValue="instant">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instant">Send instantly</SelectItem>
                      <SelectItem value="hourly">Hourly digest</SelectItem>
                      <SelectItem value="daily">Daily digest</SelectItem>
                      <SelectItem value="weekly">Weekly digest</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>

            {/* Web Notifications */}
            <div className="flex items-start space-x-3">
              <Monitor className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1 space-y-3">
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="web-notifications" 
                    checked={webNotifications}
                    onCheckedChange={setWebNotifications}
                  />
                  <Label htmlFor="web-notifications" className="text-sm font-medium">
                    Web notifications
                  </Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Receive notifications in your browser when GitHub is open
                </p>
              </div>
            </div>

            {/* Mobile Notifications */}
            <div className="flex items-start space-x-3">
              <Smartphone className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1 space-y-3">
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="mobile-notifications" 
                    checked={mobileNotifications}
                    onCheckedChange={setMobileNotifications}
                  />
                  <Label htmlFor="mobile-notifications" className="text-sm font-medium">
                    Mobile notifications
                  </Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Receive push notifications on your mobile device
                </p>
                {!mobileNotifications && (
                  <Button variant="outline" size="sm">
                    Install GitHub mobile app
                  </Button>
                )}
              </div>
            </div>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Notification Types */}
      <SettingsCard>
        <FormRow 
          label="Activity types"
          description="Choose which types of activity you want to be notified about."
        >
          <div className="space-y-4">
            {notificationTypes.map((type) => (
              <div key={type.id} className="flex items-start space-x-3">
                <Checkbox id={type.id} defaultChecked />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor={type.id} className="text-sm font-medium">
                    {type.label}
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FormRow>
      </SettingsCard>

      {/* Watching Repositories */}
      <SettingsCard>
        <FormRow 
          label="Automatic watching"
          description="Automatically watch repositories when you gain access."
        >
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="auto-watch-repos" />
                <Label htmlFor="auto-watch-repos" className="text-sm">
                  Automatically watch repositories
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="auto-watch-teams" />
                <Label htmlFor="auto-watch-teams" className="text-sm">
                  Automatically watch teams
                </Label>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              When you\'re given push access to a repository or added to a team, you can choose to automatically receive notifications for activity.
            </p>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Frequency Settings */}
      <SettingsCard>
        <FormRow 
          label="Notification frequency"
          description="Control how often you receive notifications."
        >
          <div className="space-y-4">
            <div className="space-y-3">
              <Label className="text-sm font-medium">Email frequency</Label>
              <Select defaultValue="immediate">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate</SelectItem>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-medium">Quiet hours</Label>
              <div className="flex items-center gap-2">
                <Select defaultValue="22">
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }, (_, i) => (
                      <SelectItem key={i} value={i.toString()}>
                        {i.toString().padStart(2, '0')}:00
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <span className="text-sm text-muted-foreground">to</span>
                <Select defaultValue="8">
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }, (_, i) => (
                      <SelectItem key={i} value={i.toString()}>
                        {i.toString().padStart(2, '0')}:00
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <p className="text-xs text-muted-foreground">
                No notifications will be sent during these hours.
              </p>
            </div>
          </div>
        </FormRow>
      </SettingsCard>

      <div className="border-t pt-4">
        <div className="flex justify-end">
          <Button className="bg-[#0969da] hover:bg-[#0850c5]">
            Update notification settings
          </Button>
        </div>
      </div>
    </SettingsSection>
  );
};

export default NotificationsSection;