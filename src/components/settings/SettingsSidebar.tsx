import React from 'react';
import { cn } from '@/lib/utils';
import { 
  User, 
  Settings as SettingsIcon, 
  Palette, 
  Accessibility, 
  Bell, 
  CreditCard,
  Mail,
  Lock,
  Monitor,
  Key,
  Building,
  Building2,
  Shield,
  FolderGit2,
  Cloud,
  Layers,
  Package,
  Bot,
  Globe,
  MessageSquare,
  Code,
  Puzzle,
  Calendar,
  FileText,
  Gift,
  Wrench
} from 'lucide-react';
import { SettingsSection, SettingsNavItem } from './types';

interface SettingsSidebarProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

const settingsNavigationItems: SettingsNavItem[] = [
  {
    id: 'profile',
    label: 'Profile',
    icon: User,
    description: 'Manage your profile information'
  },
  {
    id: 'account',
    label: 'Account',
    icon: SettingsIcon,
    description: 'Account settings and preferences'
  },
  {
    id: 'appearance',
    label: 'Appearance',
    icon: Palette,
    description: 'Theme and display preferences'
  },
  {
    id: 'accessibility',
    label: 'Accessibility',
    icon: Accessibility,
    description: 'Accessibility options'
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: Bell,
    description: 'Manage notification preferences'
  },
  {
    id: 'billing',
    label: 'Billing and licensing',
    icon: CreditCard,
    description: 'Billing information and licenses',
    children: [
      { id: 'billing', label: 'Plans and usage', icon: CreditCard },
    ]
  },
  {
    id: 'emails',
    label: 'Emails',
    icon: Mail,
    description: 'Manage email addresses'
  },
  {
    id: 'password',
    label: 'Password and authentication',
    icon: Lock,
    description: 'Security and authentication'
  },
  {
    id: 'sessions',
    label: 'Sessions',
    icon: Monitor,
    description: 'Active sessions'
  },
  {
    id: 'ssh-keys',
    label: 'SSH and GPG keys',
    icon: Key,
    description: 'Manage SSH and GPG keys'
  },
  {
    id: 'organizations',
    label: 'Organizations',
    icon: Building,
    description: 'Organization settings'
  },
  {
    id: 'enterprises',
    label: 'Enterprises',
    icon: Building2,
    description: 'Enterprise settings'
  },
  {
    id: 'moderation',
    label: 'Moderation',
    icon: Shield,
    description: 'Moderation settings',
    children: [
      { id: 'moderation', label: 'Blocked users', icon: Shield },
    ]
  },
  {
    id: 'repositories',
    label: 'Repositories',
    icon: FolderGit2,
    description: 'Repository settings'
  },
  {
    id: 'codespaces',
    label: 'Codespaces',
    icon: Cloud,
    description: 'Codespaces preferences'
  },
  {
    id: 'models',
    label: 'Models',
    icon: Layers,
    description: 'AI model settings'
  },
  {
    id: 'packages',
    label: 'Packages',
    icon: Package,
    description: 'Package settings'
  },
  {
    id: 'copilot',
    label: 'Copilot',
    icon: Bot,
    description: 'GitHub Copilot settings'
  },
  {
    id: 'pages',
    label: 'Pages',
    icon: Globe,
    description: 'GitHub Pages settings'
  },
  {
    id: 'saved-replies',
    label: 'Saved replies',
    icon: MessageSquare,
    description: 'Manage saved replies'
  },
  {
    id: 'security',
    label: 'Code security',
    icon: Shield,
    description: 'Security settings'
  },
  {
    id: 'applications',
    label: 'Applications',
    icon: Puzzle,
    description: 'Authorized applications'
  },
  {
    id: 'scheduled-reminders',
    label: 'Scheduled reminders',
    icon: Calendar,
    description: 'Manage scheduled reminders'
  },
  {
    id: 'security-log',
    label: 'Security log',
    icon: FileText,
    description: 'View security events'
  },
  {
    id: 'sponsorship-log',
    label: 'Sponsorship log',
    icon: Gift,
    description: 'Sponsorship activity'
  },
  {
    id: 'developer-settings',
    label: 'Developer settings',
    icon: Wrench,
    description: 'GitHub API and OAuth'
  },
];

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const getSectionGroup = (section: SettingsSection): string => {
    if (['profile', 'account', 'appearance', 'accessibility', 'notifications'].includes(section)) {
      return 'Personal';
    }
    if (['billing', 'emails', 'password', 'sessions', 'ssh-keys', 'organizations', 'enterprises', 'moderation'].includes(section)) {
      return 'Access';
    }
    if (['repositories', 'codespaces', 'models', 'packages', 'copilot', 'pages', 'saved-replies'].includes(section)) {
      return 'Code, planning, and automation';
    }
    if (['security'].includes(section)) {
      return 'Security';
    }
    if (['applications', 'scheduled-reminders'].includes(section)) {
      return 'Integrations';
    }
    if (['security-log', 'sponsorship-log'].includes(section)) {
      return 'Archives';
    }
    if (['developer-settings'].includes(section)) {
      return 'Developer settings';
    }
    return '';
  };

  const groupedItems = settingsNavigationItems.reduce((acc, item) => {
    const group = getSectionGroup(item.id);
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {} as Record<string, SettingsNavItem[]>);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0969da] rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">G</span>
          </div>
          <span className="font-semibold text-lg">Settings</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-6">
          {Object.entries(groupedItems).map(([groupName, items]) => (
            <div key={groupName}>
              {groupName && (
                <h3 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {groupName}
                </h3>
              )}
              <div className="space-y-1">
                {items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => onSectionChange(item.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left",
                        isActive 
                          ? 'bg-[#0969da]/10 text-[#0969da] font-medium' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      )}
                    >
                      {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
                      <span className="flex-1">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SettingsSidebar;