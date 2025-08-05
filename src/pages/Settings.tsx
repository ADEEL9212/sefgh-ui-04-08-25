import React, { useState } from 'react';
import GitHubHeader from '@/components/github-settings/GitHubHeader';
import UserHeaderSection from '@/components/github-settings/UserHeaderSection';
import SettingsNavigation from '@/components/github-settings/SettingsNavigation';
import PublicProfileSettings from '@/components/github-settings/PublicProfileSettings';
import AccountSettings from '@/components/github-settings/AccountSettings';
import EmailSettings from '@/components/github-settings/EmailSettings';
import AppearanceSettings from '@/components/github-settings/AppearanceSettings';

const Settings = () => {
  const [activeItem, setActiveItem] = useState('public-profile');
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const handleItemSelect = (itemId: string) => {
    setActiveItem(itemId);
  };

  const handleToggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const renderActiveContent = () => {
    switch (activeItem) {
      case 'public-profile':
        return <PublicProfileSettings />;
      case 'account':
        return <AccountSettings />;
      case 'emails':
        return <EmailSettings />;
      case 'appearance':
        return <AppearanceSettings />;
      case 'accessibility':
        return (
          <div className="max-w-4xl space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">Accessibility</h1>
              <p className="text-muted-foreground">
                Manage settings to improve your GitHub experience.
              </p>
            </div>
            <p className="text-muted-foreground">Accessibility settings coming soon...</p>
          </div>
        );
      case 'notifications':
        return (
          <div className="max-w-4xl space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">Notifications</h1>
              <p className="text-muted-foreground">
                Choose how you receive notifications about activity on GitHub.
              </p>
            </div>
            <p className="text-muted-foreground">Notification settings coming soon...</p>
          </div>
        );
      case 'billing':
        return (
          <div className="max-w-4xl space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">Billing and licensing</h1>
              <p className="text-muted-foreground">
                Manage your GitHub billing and licensing.
              </p>
            </div>
            <p className="text-muted-foreground">Billing settings coming soon...</p>
          </div>
        );
      case 'password':
        return (
          <div className="max-w-4xl space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">Password and authentication</h1>
              <p className="text-muted-foreground">
                Manage your password and authentication settings.
              </p>
            </div>
            <p className="text-muted-foreground">Password and authentication settings coming soon...</p>
          </div>
        );
      default:
        return (
          <div className="max-w-4xl space-y-6">
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">Settings</h1>
              <p className="text-muted-foreground">
                Select a settings category from the sidebar.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* GitHub Header */}
      <GitHubHeader />
      
      {/* User Header Section */}
      <UserHeaderSection />

      {/* Main Content Layout */}
      <div className="flex">
        {/* Navigation Sidebar */}
        <SettingsNavigation
          activeItem={activeItem}
          onItemSelect={handleItemSelect}
          expandedSections={expandedSections}
          onToggleSection={handleToggleSection}
        />

        {/* Content Area */}
        <main className="flex-1 p-8">
          {renderActiveContent()}
        </main>
      </div>
    </div>
  );
};

export default Settings;