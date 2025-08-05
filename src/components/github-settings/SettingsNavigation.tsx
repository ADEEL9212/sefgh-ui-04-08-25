import React from 'react';
import { 
  User, 
  Settings,
  Palette,
  Eye,
  Bell,
  CreditCard,
  Mail,
  Lock,
  Monitor,
  Key,
  Building,
  Building2,
  Flag,
  FolderOpen,
  Cloud,
  Cpu,
  Shield,
  Puzzle,
  Calendar,
  FileText,
  Heart,
  Code,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  expandable?: boolean;
  expanded?: boolean;
  preview?: boolean;
}

interface NavigationSection {
  title?: string;
  items: NavigationItem[];
}

interface SettingsNavigationProps {
  activeItem: string;
  onItemSelect: (itemId: string) => void;
  expandedSections: string[];
  onToggleSection: (sectionId: string) => void;
}

const SettingsNavigation: React.FC<SettingsNavigationProps> = ({
  activeItem,
  onItemSelect,
  expandedSections,
  onToggleSection
}) => {
  const navigationSections: NavigationSection[] = [
    {
      title: "Code",
      items: [
        { id: 'code', label: 'Code', icon: Code }
      ]
    },
    {
      title: "User Settings",
      items: [
        { id: 'public-profile', label: 'Public profile', icon: User },
        { id: 'account', label: 'Account', icon: Settings },
        { id: 'appearance', label: 'Appearance', icon: Palette },
        { id: 'accessibility', label: 'Accessibility', icon: Eye },
        { id: 'notifications', label: 'Notifications', icon: Bell }
      ]
    },
    {
      title: "Access",
      items: [
        { id: 'billing', label: 'Billing and licensing', icon: CreditCard, expandable: true },
        { id: 'emails', label: 'Emails', icon: Mail },
        { id: 'password', label: 'Password and authentication', icon: Lock },
        { id: 'sessions', label: 'Sessions', icon: Monitor },
        { id: 'ssh-keys', label: 'SSH and GPG keys', icon: Key },
        { id: 'organizations', label: 'Organizations', icon: Building },
        { id: 'enterprises', label: 'Enterprises', icon: Building2 },
        { id: 'moderation', label: 'Moderation', icon: Flag, expandable: true }
      ]
    },
    {
      title: "Code, Planning, and Automation",
      items: [
        { id: 'repositories', label: 'Repositories', icon: FolderOpen },
        { id: 'codespaces', label: 'Codespaces', icon: Cloud },
        { id: 'models', label: 'Models', icon: Cpu, preview: true }
      ]
    },
    {
      title: "Security",
      items: [
        { id: 'code-security', label: 'Code security', icon: Shield }
      ]
    },
    {
      title: "Integrations",
      items: [
        { id: 'applications', label: 'Applications', icon: Puzzle },
        { id: 'scheduled-reminders', label: 'Scheduled reminders', icon: Calendar }
      ]
    },
    {
      title: "Archives",
      items: [
        { id: 'security-log', label: 'Security log', icon: FileText },
        { id: 'sponsorship-log', label: 'Sponsorship log', icon: Heart }
      ]
    },
    {
      title: "Developer",
      items: [
        { id: 'developer-settings', label: 'Developer settings', icon: Code }
      ]
    }
  ];

  const renderNavigationItem = (item: NavigationItem) => {
    const Icon = item.icon;
    const isActive = activeItem === item.id;
    const isExpanded = expandedSections.includes(item.id);

    return (
      <div key={item.id}>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 px-3 py-2 text-sm font-normal h-auto",
            isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
          onClick={() => {
            if (item.expandable) {
              onToggleSection(item.id);
            } else {
              onItemSelect(item.id);
            }
          }}
        >
          <Icon className="h-4 w-4 shrink-0" />
          <span className="flex-1 text-left">{item.label}</span>
          {item.preview && (
            <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
              Preview
            </span>
          )}
          {item.expandable && (
            isExpanded ? (
              <ChevronDown className="h-3 w-3 shrink-0" />
            ) : (
              <ChevronRight className="h-3 w-3 shrink-0" />
            )
          )}
        </Button>
      </div>
    );
  };

  return (
    <nav className="w-64 bg-card border-r border-border flex-shrink-0">
      <div className="p-4 space-y-6">
        {navigationSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.title && (
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {section.title}
              </h3>
            )}
            <div className="space-y-1">
              {section.items.map(renderNavigationItem)}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default SettingsNavigation;