import React, { useState } from 'react';
import { X, User, Settings, HelpCircle, Monitor, Bell, Shield, Palette, Globe, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

interface UserAccount {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isActive: boolean;
}

interface AccountSettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountSettingsPanel: React.FC<AccountSettingsPanelProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/public/lovable-uploads/1bcfb047-f873-4470-9f3a-9c04a86e4787.png',
    bio: 'Product designer and developer',
    company: 'Tech Corp',
    location: 'San Francisco, CA'
  });

  const [accounts] = useState<UserAccount[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: '/public/lovable-uploads/1bcfb047-f873-4470-9f3a-9c04a86e4787.png',
      isActive: true,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      avatar: '/public/lovable-uploads/41e43621-ad73-4439-92cb-9be7579c9766.png',
      isActive: false,
    }
  ]);

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
    language: 'en',
    timezone: 'PST'
  });

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your account settings have been updated successfully.",
    });
  };

  const handleSignOut = () => {
    toast({
      title: "Signed out",
      description: "You have been signed out of your account.",
    });
  };

  const handleAccountSwitch = (accountId: string) => {
    toast({
      title: "Account switched",
      description: "Successfully switched to the selected account.",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed inset-y-0 right-0 h-full w-full max-w-4xl border-l bg-background shadow-lg">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-6">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Account Settings</h1>
              <p className="text-sm text-muted-foreground">Manage your account preferences and settings</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex">
              <div className="w-64 border-r bg-muted/30">
                <TabsList className="grid w-full grid-cols-1 gap-1 p-2 bg-transparent">
                  <TabsTrigger value="profile" className="justify-start gap-2 data-[state=active]:bg-background">
                    <User className="h-4 w-4" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="preferences" className="justify-start gap-2 data-[state=active]:bg-background">
                    <Settings className="h-4 w-4" />
                    Preferences
                  </TabsTrigger>
                  <TabsTrigger value="accounts" className="justify-start gap-2 data-[state=active]:bg-background">
                    <Monitor className="h-4 w-4" />
                    Accounts
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="justify-start gap-2 data-[state=active]:bg-background">
                    <Bell className="h-4 w-4" />
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger value="security" className="justify-start gap-2 data-[state=active]:bg-background">
                    <Shield className="h-4 w-4" />
                    Security
                  </TabsTrigger>
                  <TabsTrigger value="help" className="justify-start gap-2 data-[state=active]:bg-background">
                    <HelpCircle className="h-4 w-4" />
                    Help
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="flex-1 overflow-auto">
                <TabsContent value="profile" className="p-6 space-y-6 m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>Update your personal information and profile picture</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <Button variant="outline" size="sm">Change Photo</Button>
                          <p className="text-xs text-muted-foreground mt-1">JPG, PNG or GIF. Max size 2MB.</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="bio">Bio</Label>
                        <Input id="bio" value={user.bio} onChange={(e) => setUser({...user, bio: e.target.value})} />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" value={user.company} onChange={(e) => setUser({...user, company: e.target.value})} />
                        </div>
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" value={user.location} onChange={(e) => setUser({...user, location: e.target.value})} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="preferences" className="p-6 space-y-6 m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Appearance</CardTitle>
                      <CardDescription>Customize your app appearance</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="darkMode">Dark Mode</Label>
                          <p className="text-sm text-muted-foreground">Use dark theme across the application</p>
                        </div>
                        <Switch 
                          id="darkMode" 
                          checked={preferences.darkMode}
                          onCheckedChange={(checked) => setPreferences({...preferences, darkMode: checked})}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Language & Region</CardTitle>
                      <CardDescription>Set your language and timezone preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="language">Language</Label>
                        <Input id="language" value={preferences.language} onChange={(e) => setPreferences({...preferences, language: e.target.value})} />
                      </div>
                      <div>
                        <Label htmlFor="timezone">Timezone</Label>
                        <Input id="timezone" value={preferences.timezone} onChange={(e) => setPreferences({...preferences, timezone: e.target.value})} />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="accounts" className="p-6 space-y-6 m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Connected Accounts</CardTitle>
                      <CardDescription>Manage and switch between your accounts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {accounts.map((account) => (
                        <div key={account.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={account.avatar} alt={account.name} />
                              <AvatarFallback>{account.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{account.name}</p>
                              <p className="text-sm text-muted-foreground">{account.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {account.isActive && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Active</span>
                            )}
                            {!account.isActive && (
                              <Button variant="outline" size="sm" onClick={() => handleAccountSwitch(account.id)}>
                                Switch
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      <Separator />
                      
                      <Button variant="destructive" onClick={handleSignOut} className="w-full">
                        Sign out of all accounts
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications" className="p-6 space-y-6 m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <CardDescription>Choose how you want to be notified</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="email-notifications">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                        </div>
                        <Switch 
                          id="email-notifications" 
                          checked={preferences.emailNotifications}
                          onCheckedChange={(checked) => setPreferences({...preferences, emailNotifications: checked})}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="push-notifications">Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive push notifications in your browser</p>
                        </div>
                        <Switch 
                          id="push-notifications" 
                          checked={preferences.pushNotifications}
                          onCheckedChange={(checked) => setPreferences({...preferences, pushNotifications: checked})}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="p-6 space-y-6 m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security</CardTitle>
                      <CardDescription>Manage your account security settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button variant="outline" className="w-full justify-start">
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Two-Factor Authentication
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Active Sessions
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="help" className="p-6 space-y-6 m-0">
                  <Card>
                    <CardHeader>
                      <CardTitle>Help & Support</CardTitle>
                      <CardDescription>Get help and support for your account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button variant="outline" className="w-full justify-start">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Help Center
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Contact Support
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Keyboard Shortcuts
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Privacy Policy
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Terms of Service
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Footer */}
          <div className="border-t p-6">
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPanel;