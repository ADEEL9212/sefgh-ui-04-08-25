import React from 'react';
import { SettingsSection, SettingsCard, FormRow } from '../SettingsCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertTriangle } from 'lucide-react';

const AccountSection: React.FC = () => {
  return (
    <SettingsSection 
      title="Account" 
      description="Manage your account settings and preferences."
    >
      {/* Username Section */}
      <SettingsCard>
        <FormRow 
          label="Username"
          description="Your unique username on GitHub."
        >
          <div className="space-y-3">
            <Input defaultValue="johndoe" />
            <p className="text-xs text-muted-foreground">
              Changing your username can have unintended side effects.{' '}
              <a href="#" className="text-[#0969da] hover:underline">
                Learn more
              </a>
            </p>
            <Button variant="outline" size="sm">
              Change username
            </Button>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Account Verification */}
      <SettingsCard>
        <FormRow 
          label="Account verification"
          description="Verify your account to access additional features."
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Your account is verified</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Your account has been verified with your email address.
            </p>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Export Account Data */}
      <SettingsCard>
        <FormRow 
          label="Export account data"
          description="Export all repositories and profile metadata for your personal account."
        >
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Export personal account data including profile information, repositories, and activity.
            </p>
            <Button variant="outline" size="sm">
              Start export
            </Button>
          </div>
        </FormRow>
      </SettingsCard>

      {/* Delete Account */}
      <SettingsCard className="border-red-200 dark:border-red-800">
        <FormRow 
          label="Delete account"
          description="Once you delete your account, there is no going back. Please be certain."
        >
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-md">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-red-900 dark:text-red-100">
                  This action cannot be undone
                </p>
                <p className="text-red-700 dark:text-red-300 mt-1">
                  This will permanently delete your account and all associated data.
                </p>
              </div>
            </div>
            <Button 
              variant="destructive" 
              size="sm"
              className="bg-red-600 hover:bg-red-700"
            >
              Delete account
            </Button>
          </div>
        </FormRow>
      </SettingsCard>
    </SettingsSection>
  );
};

export default AccountSection;