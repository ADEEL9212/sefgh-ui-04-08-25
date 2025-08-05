import React from 'react';
import { SettingsSection, SettingsCard } from '../SettingsCard';
import { SettingsSection as SettingsSectionType } from '../types';
import { Construction } from 'lucide-react';

interface PlaceholderSectionProps {
  section: SettingsSectionType;
  title: string;
  description?: string;
}

const sectionDescriptions: Record<SettingsSectionType, string> = {
  'profile': 'Manage your profile information and social accounts.',
  'account': 'Account settings and preferences.',
  'appearance': 'Customize how GitHub looks and feels.',
  'accessibility': 'Accessibility options and preferences.',
  'notifications': 'Configure notification preferences.',
  'billing': 'Manage billing information and subscription plans.',
  'emails': 'Manage your email addresses and preferences.',
  'password': 'Security settings and authentication methods.',
  'sessions': 'View and manage active sessions.',
  'ssh-keys': 'Manage SSH and GPG keys for secure access.',
  'organizations': 'Organization membership and settings.',
  'enterprises': 'Enterprise account settings.',
  'moderation': 'Content moderation and user blocking.',
  'repositories': 'Repository settings and preferences.',
  'codespaces': 'Codespaces configuration and settings.',
  'models': 'AI model settings and preferences.',
  'packages': 'Package registry settings.',
  'copilot': 'GitHub Copilot configuration.',
  'pages': 'GitHub Pages settings.',
  'saved-replies': 'Manage saved reply templates.',
  'security': 'Code security and vulnerability settings.',
  'applications': 'Authorized applications and OAuth apps.',
  'scheduled-reminders': 'Manage scheduled notifications.',
  'security-log': 'View security-related events and logs.',
  'sponsorship-log': 'View sponsorship activity and history.',
  'developer-settings': 'GitHub API and developer tools.',
};

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ 
  section, 
  title, 
  description 
}) => {
  const sectionDescription = description || sectionDescriptions[section] || 'Settings for this section.';

  return (
    <SettingsSection 
      title={title}
      description={sectionDescription}
    >
      <SettingsCard>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Construction className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            Coming Soon
          </h3>
          <p className="text-muted-foreground max-w-md">
            This settings section is currently being developed. 
            Full functionality will be available in a future update.
          </p>
        </div>
      </SettingsCard>
    </SettingsSection>
  );
};

export default PlaceholderSection;