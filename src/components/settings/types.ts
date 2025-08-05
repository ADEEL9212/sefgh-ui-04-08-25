// Settings section types
export type SettingsSection = 
  | 'profile'
  | 'account'
  | 'appearance'
  | 'accessibility'
  | 'notifications'
  | 'billing'
  | 'emails'
  | 'password'
  | 'sessions'
  | 'ssh-keys'
  | 'organizations'
  | 'enterprises'
  | 'moderation'
  | 'repositories'
  | 'codespaces'
  | 'models'
  | 'packages'
  | 'copilot'
  | 'pages'
  | 'saved-replies'
  | 'security'
  | 'applications'
  | 'scheduled-reminders'
  | 'security-log'
  | 'sponsorship-log'
  | 'developer-settings';

export interface SettingsNavItem {
  id: SettingsSection;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: SettingsNavItem[];
  description?: string;
}

export interface ProfileFormData {
  name: string;
  bio: string;
  pronouns: string;
  email: string;
  url: string;
  company: string;
  location: string;
  orcidId: string;
  socialAccounts: SocialAccount[];
}

export interface SocialAccount {
  platform: string;
  url: string;
}

export interface AppearanceSettings {
  theme: 'system' | 'light' | 'dark' | 'light-high-contrast' | 'dark-high-contrast';
  tabSize: number;
  commandPalette: boolean;
  emojiStyle: 'native' | 'unicode';
}

export interface AccessibilitySettings {
  motionReduction: boolean;
  keyboardShortcuts: boolean;
}