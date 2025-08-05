import React from 'react';
import { cn } from '@/lib/utils';

interface SettingsCardProps {
  children: React.ReactNode;
  className?: string;
}

const SettingsCard: React.FC<SettingsCardProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "bg-card border rounded-lg p-6 space-y-4",
      className
    )}>
      {children}
    </div>
  );
};

interface SettingsSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({ 
  title, 
  description, 
  children, 
  className 
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
};

interface FormRowProps {
  label: string;
  description?: string;
  children: React.ReactNode;
  required?: boolean;
}

const FormRow: React.FC<FormRowProps> = ({ label, description, children, required }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
      <div className="lg:col-span-1">
        <label className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div className="lg:col-span-2">
        {children}
      </div>
    </div>
  );
};

export { SettingsCard, SettingsSection, FormRow };