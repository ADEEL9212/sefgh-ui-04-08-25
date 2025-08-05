import React from 'react';
import { SettingsSection, SettingsCard, FormRow } from '../SettingsCard';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const AccessibilitySection: React.FC = () => {
  const [motionReduction, setMotionReduction] = React.useState(false);
  const [keyboardShortcuts, setKeyboardShortcuts] = React.useState(true);
  const [screenReaderMode, setScreenReaderMode] = React.useState(false);
  const [colorBlindSupport, setColorBlindSupport] = React.useState('none');

  return (
    <SettingsSection 
      title="Accessibility" 
      description="Manage your accessibility preferences to improve your GitHub experience."
    >
      {/* Motion Reduction */}
      <SettingsCard>
        <FormRow 
          label="Motion"
          description="Control the amount of motion in the interface."
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="motion-reduction" 
                checked={motionReduction}
                onCheckedChange={setMotionReduction}
              />
              <Label htmlFor="motion-reduction" className="text-sm">
                Reduce motion in the interface
              </Label>
            </div>
            <p className="text-xs text-muted-foreground">
              This reduces animations and transitions throughout GitHub to improve accessibility and performance.
            </p>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Keyboard Shortcuts */}
      <SettingsCard>
        <FormRow 
          label="Keyboard shortcuts"
          description="Enable keyboard shortcuts for faster navigation."
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="keyboard-shortcuts" 
                checked={keyboardShortcuts}
                onCheckedChange={setKeyboardShortcuts}
              />
              <Label htmlFor="keyboard-shortcuts" className="text-sm">
                Enable keyboard shortcuts
              </Label>
            </div>
            <p className="text-xs text-muted-foreground">
              Use keyboard shortcuts to navigate and perform actions quickly. Press <kbd className="px-1 py-0.5 text-xs bg-muted rounded">?</kbd> to see available shortcuts.
            </p>
            {keyboardShortcuts && (
              <Button variant="outline" size="sm">
                View shortcuts
              </Button>
            )}
          </div>
        </FormRow>
      </SettingsCard>

      {/* Screen Reader */}
      <SettingsCard>
        <FormRow 
          label="Screen reader support"
          description="Enhanced support for screen readers and assistive technologies."
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="screen-reader" 
                checked={screenReaderMode}
                onCheckedChange={setScreenReaderMode}
              />
              <Label htmlFor="screen-reader" className="text-sm">
                Enable screen reader optimizations
              </Label>
            </div>
            <p className="text-xs text-muted-foreground">
              Optimizes the interface for screen readers by providing additional ARIA labels and descriptions.
            </p>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Color Blind Support */}
      <SettingsCard>
        <FormRow 
          label="Color vision"
          description="Adjust colors to improve visibility for color vision differences."
        >
          <div className="space-y-4">
            <Select value={colorBlindSupport} onValueChange={setColorBlindSupport}>
              <SelectTrigger className="w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">No adjustment</SelectItem>
                <SelectItem value="protanopia">Protanopia (red-blind)</SelectItem>
                <SelectItem value="deuteranopia">Deuteranopia (green-blind)</SelectItem>
                <SelectItem value="tritanopia">Tritanopia (blue-blind)</SelectItem>
                <SelectItem value="high-contrast">High contrast</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Adjusts colors throughout GitHub to improve visibility for different types of color vision.
            </p>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Text Size */}
      <SettingsCard>
        <FormRow 
          label="Text size"
          description="Adjust the base text size for better readability."
        >
          <div className="space-y-4">
            <Select defaultValue="medium">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium (default)</SelectItem>
                <SelectItem value="large">Large</SelectItem>
                <SelectItem value="extra-large">Extra large</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Changes the base text size throughout GitHub for improved readability.
            </p>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Focus Indicators */}
      <SettingsCard>
        <FormRow 
          label="Focus indicators"
          description="Enhance focus indicators for keyboard navigation."
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="enhanced-focus" 
                defaultChecked={true}
              />
              <Label htmlFor="enhanced-focus" className="text-sm">
                Enhanced focus indicators
              </Label>
            </div>
            <p className="text-xs text-muted-foreground">
              Makes focus indicators more visible when navigating with a keyboard.
            </p>
          </div>
        </FormRow>
      </SettingsCard>

      <div className="border-t pt-4">
        <div className="flex justify-end">
          <Button className="bg-[#0969da] hover:bg-[#0850c5]">
            Update accessibility settings
          </Button>
        </div>
      </div>
    </SettingsSection>
  );
};

export default AccessibilitySection;