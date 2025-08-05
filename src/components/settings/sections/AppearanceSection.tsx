import React from 'react';
import { SettingsSection, SettingsCard, FormRow } from '../SettingsCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Monitor, Sun, Moon, Contrast } from 'lucide-react';

const AppearanceSection: React.FC = () => {
  const [theme, setTheme] = React.useState('system');
  const [tabSize, setTabSize] = React.useState('4');
  const [commandPalette, setCommandPalette] = React.useState(true);
  const [emojiStyle, setEmojiStyle] = React.useState('native');

  const themeOptions = [
    { value: 'system', label: 'Sync with system', icon: Monitor },
    { value: 'light', label: 'Light default', icon: Sun },
    { value: 'dark', label: 'Dark default', icon: Moon },
    { value: 'light-high-contrast', label: 'Light high contrast', icon: Contrast },
    { value: 'dark-high-contrast', label: 'Dark high contrast', icon: Contrast },
  ];

  return (
    <SettingsSection 
      title="Appearance" 
      description="Customize how GitHub looks and feels for you."
    >
      {/* Theme Selection */}
      <SettingsCard>
        <FormRow 
          label="Theme preference"
          description="Choose how GitHub looks to you. Select a single theme, or sync with your system."
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => setTheme(option.value)}
                    className={`relative p-4 border rounded-lg text-left transition-all hover:border-[#0969da] ${
                      theme === option.value 
                        ? 'border-[#0969da] bg-[#0969da]/5' 
                        : 'border-border'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{option.label}</span>
                    </div>
                    {theme === option.value && (
                      <div className="absolute top-2 right-2 w-2 h-2 bg-[#0969da] rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Tab Size */}
      <SettingsCard>
        <FormRow 
          label="Tab size preference"
          description="Choose the number of spaces a tab is equal to when viewing code."
        >
          <div className="space-y-3">
            <Select value={tabSize} onValueChange={setTabSize}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2 spaces</SelectItem>
                <SelectItem value="4">4 spaces</SelectItem>
                <SelectItem value="8">8 spaces</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              This setting only affects how tabs are displayed, not how they are stored.
            </p>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Command Palette */}
      <SettingsCard>
        <FormRow 
          label="Command palette"
          description="Enable the command palette for quick navigation and actions."
        >
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Switch 
                id="command-palette" 
                checked={commandPalette}
                onCheckedChange={setCommandPalette}
              />
              <Label htmlFor="command-palette" className="text-sm">
                Enable command palette
              </Label>
            </div>
            <p className="text-xs text-muted-foreground">
              Press Cmd+K (Mac) or Ctrl+K (Windows/Linux) to open the command palette.
            </p>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Emoji Style */}
      <SettingsCard>
        <FormRow 
          label="Emoji skin tone preference"
          description="Choose your preferred emoji skin tone."
        >
          <div className="space-y-3">
            <Select value={emojiStyle} onValueChange={setEmojiStyle}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="native">👋 Native emoji</SelectItem>
                <SelectItem value="unicode">👋🏻 Light skin tone</SelectItem>
                <SelectItem value="unicode-medium-light">👋🏼 Medium-light skin tone</SelectItem>
                <SelectItem value="unicode-medium">👋🏽 Medium skin tone</SelectItem>
                <SelectItem value="unicode-medium-dark">👋🏾 Medium-dark skin tone</SelectItem>
                <SelectItem value="unicode-dark">👋🏿 Dark skin tone</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Font Settings */}
      <SettingsCard>
        <FormRow 
          label="Editor font size"
          description="Adjust the font size in code editors."
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Input 
                type="number" 
                defaultValue="14" 
                min="10" 
                max="24" 
                className="w-20"
              />
              <span className="text-sm text-muted-foreground">px</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Font size for code editors and diffs.
            </p>
          </div>
        </FormRow>
      </SettingsCard>

      <div className="border-t pt-4">
        <div className="flex justify-end">
          <Button className="bg-[#0969da] hover:bg-[#0850c5]">
            Update preferences
          </Button>
        </div>
      </div>
    </SettingsSection>
  );
};

export default AppearanceSection;