import React from 'react';
import { SettingsSection, SettingsCard, FormRow } from '../SettingsCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Plus, X } from 'lucide-react';

const ProfileSection: React.FC = () => {
  const [socialAccounts, setSocialAccounts] = React.useState([
    { platform: 'Twitter', url: 'https://twitter.com/username' },
  ]);

  const addSocialAccount = () => {
    setSocialAccounts([...socialAccounts, { platform: '', url: '' }]);
  };

  const removeSocialAccount = (index: number) => {
    setSocialAccounts(socialAccounts.filter((_, i) => i !== index));
  };

  const updateSocialAccount = (index: number, field: 'platform' | 'url', value: string) => {
    const updated = [...socialAccounts];
    updated[index][field] = value;
    setSocialAccounts(updated);
  };

  return (
    <SettingsSection 
      title="Profile" 
      description="This information will be shown on your profile."
    >
      <SettingsCard>
        <FormRow 
          label="Profile picture"
          description="Upload a picture to personalize your account."
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-20 w-20">
                <AvatarImage src="" alt="Profile" />
                <AvatarFallback className="text-lg">JD</AvatarFallback>
              </Avatar>
              <button className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-[#0969da] text-white flex items-center justify-center hover:bg-[#0850c5] transition-colors">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm">
                Upload new picture
              </Button>
              <p className="text-xs text-muted-foreground">
                JPG, GIF or PNG. 1MB max.
              </p>
            </div>
          </div>
        </FormRow>

        <FormRow 
          label="Name" 
          description="Your full name."
          required
        >
          <Input placeholder="Enter your full name" defaultValue="John Doe" />
        </FormRow>

        <FormRow 
          label="Bio"
          description="A short bio about yourself."
        >
          <Textarea 
            placeholder="Tell us about yourself" 
            rows={3}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground mt-1">0/160 characters</p>
        </FormRow>

        <FormRow 
          label="Pronouns"
          description="Let others know how to refer to you."
        >
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select pronouns" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="they/them">they/them</SelectItem>
              <SelectItem value="she/her">she/her</SelectItem>
              <SelectItem value="he/him">he/him</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
        </FormRow>

        <FormRow 
          label="Public email"
          description="Select the email address you want to be publicly visible."
        >
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select email" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="john@example.com">john@example.com</SelectItem>
              <SelectItem value="john.doe@company.com">john.doe@company.com</SelectItem>
            </SelectContent>
          </Select>
        </FormRow>

        <FormRow 
          label="URL"
          description="Your personal website or blog."
        >
          <Input placeholder="https://example.com" />
        </FormRow>

        <FormRow 
          label="Company"
          description="The company you work for."
        >
          <Input placeholder="@company" />
        </FormRow>

        <FormRow 
          label="Location"
          description="Your location."
        >
          <Input placeholder="San Francisco, CA" />
        </FormRow>

        <FormRow 
          label="ORCID iD"
          description="Connect your ORCID iD to link your research identity."
        >
          <div className="flex gap-2">
            <Input placeholder="0000-0000-0000-0000" />
            <Button variant="outline">Connect</Button>
          </div>
        </FormRow>

        <FormRow 
          label="Social accounts"
          description="Link to your social media profiles."
        >
          <div className="space-y-3">
            {socialAccounts.map((account, index) => (
              <div key={index} className="flex gap-2">
                <Select
                  value={account.platform}
                  onValueChange={(value) => updateSocialAccount(index, 'platform', value)}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Twitter">Twitter</SelectItem>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                    <SelectItem value="GitHub">GitHub</SelectItem>
                    <SelectItem value="Website">Website</SelectItem>
                  </SelectContent>
                </Select>
                <Input 
                  placeholder="https://..." 
                  value={account.url}
                  onChange={(e) => updateSocialAccount(index, 'url', e.target.value)}
                  className="flex-1"
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => removeSocialAccount(index)}
                  className="flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={addSocialAccount}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add social account
            </Button>
          </div>
        </FormRow>

        <div className="border-t pt-4">
          <div className="flex justify-end">
            <Button className="bg-[#0969da] hover:bg-[#0850c5]">
              Update profile
            </Button>
          </div>
        </div>
      </SettingsCard>
    </SettingsSection>
  );
};

export default ProfileSection;