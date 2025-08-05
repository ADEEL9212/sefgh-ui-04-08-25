import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Import GitHub Settings components
import SettingsLayout from '@/components/settings/SettingsLayout';
import { SettingsSection } from '@/components/settings/types';

// Import section components
import ProfileSection from '@/components/settings/sections/ProfileSection';
import AccountSection from '@/components/settings/sections/AccountSection';
import AppearanceSection from '@/components/settings/sections/AppearanceSection';
import AccessibilitySection from '@/components/settings/sections/AccessibilitySection';
import NotificationsSection from '@/components/settings/sections/NotificationsSection';
import PlaceholderSection from '@/components/settings/sections/PlaceholderSection';

const Settings = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<SettingsSection>('profile');

  const handleBackToChat = () => {
    navigate('/');
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSection />;
      case 'account':
        return <AccountSection />;
      case 'appearance':
        return <AppearanceSection />;
      case 'accessibility':
        return <AccessibilitySection />;
      case 'notifications':
        return <NotificationsSection />;
      case 'billing':
        return <PlaceholderSection section="billing" title="Billing and licensing" />;
      case 'emails':
        return <PlaceholderSection section="emails" title="Emails" />;
      case 'password':
        return <PlaceholderSection section="password" title="Password and authentication" />;
      case 'sessions':
        return <PlaceholderSection section="sessions" title="Sessions" />;
      case 'ssh-keys':
        return <PlaceholderSection section="ssh-keys" title="SSH and GPG keys" />;
      case 'organizations':
        return <PlaceholderSection section="organizations" title="Organizations" />;
      case 'enterprises':
        return <PlaceholderSection section="enterprises" title="Enterprises" />;
      case 'moderation':
        return <PlaceholderSection section="moderation" title="Moderation" />;
      case 'repositories':
        return <PlaceholderSection section="repositories" title="Repositories" />;
      case 'codespaces':
        return <PlaceholderSection section="codespaces" title="Codespaces" />;
      case 'models':
        return <PlaceholderSection section="models" title="Models" />;
      case 'packages':
        return <PlaceholderSection section="packages" title="Packages" />;
      case 'copilot':
        return <PlaceholderSection section="copilot" title="Copilot" />;
      case 'pages':
        return <PlaceholderSection section="pages" title="Pages" />;
      case 'saved-replies':
        return <PlaceholderSection section="saved-replies" title="Saved replies" />;
      case 'security':
        return <PlaceholderSection section="security" title="Code security" />;
      case 'applications':
        return <PlaceholderSection section="applications" title="Applications" />;
      case 'scheduled-reminders':
        return <PlaceholderSection section="scheduled-reminders" title="Scheduled reminders" />;
      case 'security-log':
        return <PlaceholderSection section="security-log" title="Security log" />;
      case 'sponsorship-log':
        return <PlaceholderSection section="sponsorship-log" title="Sponsorship log" />;
      case 'developer-settings':
        return <PlaceholderSection section="developer-settings" title="Developer settings" />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              onClick={handleBackToChat}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Chat
            </Button>
          </div>
        </div>
      </div>

      {/* Settings Layout */}
      <SettingsLayout
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      >
        {renderActiveSection()}
      </SettingsLayout>
    </div>
  );
};

export default Settings;