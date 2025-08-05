import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Link, ExternalLink, Clock, Info } from 'lucide-react';

const PublicProfileSettings = () => {
  const [formData, setFormData] = useState({
    name: 'ADEEL9212',
    email: 'adeel@example.com',
    bio: '',
    pronouns: '',
    url: '',
    twitter: '',
    linkedin: '',
    company: '',
    location: '',
    showLocalTime: false,
    orcidId: ''
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Public profile</h1>
        <p className="text-muted-foreground">
          This information will be shown on your public profile.
        </p>
      </div>

      {/* Profile Picture Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Profile picture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder-avatar.png" alt="Profile picture" />
              <AvatarFallback className="text-2xl">AD</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Button variant="outline" className="gap-2">
                <Camera className="h-4 w-4" />
                Edit
              </Button>
              <p className="text-xs text-muted-foreground">
                Recommended: Square image, at least 500×500 pixels and less than 1 MB.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Basic information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="max-w-md"
            />
            <p className="text-xs text-muted-foreground">
              Your name may appear around GitHub where you contribute or are mentioned.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Public email
            </Label>
            <div className="flex items-center gap-2 max-w-md">
              <Select value={formData.email} onValueChange={(value) => handleInputChange('email', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select public email" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="adeel@example.com">adeel@example.com</SelectItem>
                  <SelectItem value="dont-show">Don't show my email publicly</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="ghost" size="sm" className="gap-1">
                <ExternalLink className="h-3 w-3" />
                Privacy
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio" className="text-sm font-medium">
              Bio
            </Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              placeholder="Tell us a little bit about yourself"
              className="max-w-md min-h-[80px]"
            />
            <p className="text-xs text-muted-foreground">
              You can @mention other users and organizations to link to them.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pronouns" className="text-sm font-medium">
              Pronouns
            </Label>
            <Select value={formData.pronouns} onValueChange={(value) => handleInputChange('pronouns', value)}>
              <SelectTrigger className="max-w-md">
                <SelectValue placeholder="Don't specify" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dont-specify">Don't specify</SelectItem>
                <SelectItem value="he/him">he/him</SelectItem>
                <SelectItem value="she/her">she/her</SelectItem>
                <SelectItem value="they/them">they/them</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Links and Social */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="url" className="text-sm font-medium">
              URL
            </Label>
            <div className="relative max-w-md">
              <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="url"
                value={formData.url}
                onChange={(e) => handleInputChange('url', e.target.value)}
                placeholder="https://example.com"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">Social accounts</h4>
            
            <div className="space-y-2">
              <Label htmlFor="twitter" className="text-sm font-medium text-muted-foreground">
                Twitter
              </Label>
              <Input
                id="twitter"
                value={formData.twitter}
                onChange={(e) => handleInputChange('twitter', e.target.value)}
                placeholder="Username"
                className="max-w-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-sm font-medium text-muted-foreground">
                LinkedIn
              </Label>
              <Input
                id="linkedin"  
                value={formData.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                placeholder="Username"
                className="max-w-md"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Work and Location */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Work</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium">
              Company
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="@company"
              className="max-w-md"
            />
            <p className="text-xs text-muted-foreground">
              You can @mention your company or organization to link to them.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium">
              Location
            </Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              placeholder="San Francisco, CA"
              className="max-w-md"
            />
          </div>

          <div className="flex items-center justify-between max-w-md">
            <div className="space-y-1">
              <Label className="text-sm font-medium">Display current local time</Label>
              <p className="text-xs text-muted-foreground">
                Other users will see the time difference from their local time.
              </p>
            </div>
            <Switch
              checked={formData.showLocalTime}
              onCheckedChange={(checked) => handleInputChange('showLocalTime', checked)}
            />
          </div>

          {formData.showLocalTime && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground max-w-md">
              <Clock className="h-4 w-4" />
              <span>Local time: 2:30 PM</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ORCID iD */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">ORCID iD</CardTitle>
          <CardDescription>
            Connect your ORCID iD to display it on your profile and link your GitHub contributions to your ORCID record.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            Connect ORCID iD
          </Button>
        </CardContent>
      </Card>

      {/* Privacy Statement */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Private profile information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-3 p-4 bg-muted rounded-md">
            <Info className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Keep your profile information private</p>
              <p className="text-xs text-muted-foreground">
                Some profile information may be visible to other GitHub users regardless of your email privacy settings. 
                Learn more about what information is visible.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Update Button */}
      <div className="flex justify-start">
        <Button className="bg-primary hover:bg-primary/90">
          Update profile
        </Button>
      </div>
    </div>
  );
};

export default PublicProfileSettings;