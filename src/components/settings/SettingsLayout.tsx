import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import SettingsSidebar from './SettingsSidebar';
import { SettingsSection } from './types';

interface SettingsLayoutProps {
  children: React.ReactNode;
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({
  children,
  activeSection,
  onSectionChange,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 transform bg-card border-r transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <SettingsSidebar
            activeSection={activeSection}
            onSectionChange={(section) => {
              onSectionChange(section);
              setSidebarOpen(false);
            }}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 lg:pl-0">
          {/* Mobile header */}
          <div className="border-b bg-card/50 backdrop-blur-sm px-4 py-3 lg:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Settings
            </button>
          </div>

          {/* Content area */}
          <main className="p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;