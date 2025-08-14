import React, { useState, useRef, useEffect } from 'react';
import { 
  Filter, 
  BookOpen, 
  Lightbulb, 
  Brain, 
  Globe, 
  PenTool, 
  ChevronDown, 
  ChevronRight,
  Settings,
  Paperclip,
  Github,
  GitBranch,
  Search,
  MoreHorizontal
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

interface Tool {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  separator?: boolean;
}

interface ToolsDropdownProps {
  onToggleGithubSearch?: () => void;
  onOpenCanvas?: () => void;
  onFileUpload?: () => void;
  className?: string;
}

export const ToolsDropdown: React.FC<ToolsDropdownProps> = ({ 
  onToggleGithubSearch,
  onOpenCanvas,
  onFileUpload,
  className = ''
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [moreFocusedIndex, setMoreFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const moreDropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const moreButtonRef = useRef<HTMLDivElement>(null);

  // Primary tools for main dropdown
  const primaryTools: Tool[] = [
    {
      id: 'add-files',
      label: 'Add photos & files',
      icon: Paperclip,
      action: () => onFileUpload?.()
    },
    {
      id: 'study',
      label: 'Study and learn',
      icon: BookOpen,
      action: () => console.log('Study and Learn tool launched'),
      separator: true
    },
    {
      id: 'think',
      label: 'Think longer',
      icon: Lightbulb,
      action: () => console.log('Think Longer tool launched')
    },
    {
      id: 'research',
      label: 'Deep research',
      icon: Brain,
      action: () => console.log('Deep Research tool launched'),
      separator: true
    },
    {
      id: 'github-search',
      label: 'GitHub search',
      icon: Github,
      action: () => onToggleGithubSearch?.()
    },
    {
      id: 'gitee-search',
      label: 'Gitee search',
      icon: GitBranch,
      action: () => console.log('Gitee search tool launched')
    }
  ];

  // Secondary tools for "More" submenu
  const secondaryTools: Tool[] = [
    {
      id: 'websearch',
      label: 'Web search',
      icon: Globe,
      action: () => console.log('Web Search tool launched')
    },
    {
      id: 'canvas',
      label: 'Canvas',
      icon: PenTool,
      action: () => onOpenCanvas?.()
    }
  ];

  // Handle outside clicks for both dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is outside main dropdown
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        // If clicking outside main dropdown, close it and any submenu
        setIsOpen(false);
        setIsMoreOpen(false);
        setFocusedIndex(-1);
        setMoreFocusedIndex(-1);
      }

      // Check if click is outside More submenu (but might be inside main dropdown)
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(target) &&
        moreButtonRef.current &&
        !moreButtonRef.current.contains(target)
      ) {
        setIsMoreOpen(false);
        setMoreFocusedIndex(-1);
      }
    };

    if (isOpen || isMoreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isMoreOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (isMoreOpen) {
        // Handle navigation in More submenu
        switch (event.key) {
          case 'Escape':
            setIsMoreOpen(false);
            setMoreFocusedIndex(-1);
            break;
          case 'ArrowDown':
            event.preventDefault();
            setMoreFocusedIndex(prev => (prev + 1) % secondaryTools.length);
            break;
          case 'ArrowUp':
            event.preventDefault();
            setMoreFocusedIndex(prev => prev <= 0 ? secondaryTools.length - 1 : prev - 1);
            break;
          case 'ArrowLeft':
            event.preventDefault();
            setIsMoreOpen(false);
            setMoreFocusedIndex(-1);
            break;
          case 'Enter':
            if (moreFocusedIndex >= 0) {
              event.preventDefault();
              handleSecondaryToolClick(secondaryTools[moreFocusedIndex]);
            }
            break;
        }
      } else {
        // Handle navigation in main dropdown
        switch (event.key) {
          case 'Escape':
            setIsOpen(false);
            setFocusedIndex(-1);
            buttonRef.current?.focus();
            break;
          case 'ArrowDown':
            event.preventDefault();
            setFocusedIndex(prev => (prev + 1) % (primaryTools.length + 1)); // +1 for More option
            break;
          case 'ArrowUp':
            event.preventDefault();
            setFocusedIndex(prev => prev <= 0 ? primaryTools.length : prev - 1); // primaryTools.length is More option
            break;
          case 'ArrowRight':
            if (focusedIndex === primaryTools.length) { // More option is focused
              event.preventDefault();
              setIsMoreOpen(true);
              setMoreFocusedIndex(0);
            }
            break;
          case 'Enter':
            if (focusedIndex >= 0) {
              event.preventDefault();
              if (focusedIndex === primaryTools.length) {
                // More option
                setIsMoreOpen(!isMoreOpen);
              } else {
                handlePrimaryToolClick(primaryTools[focusedIndex]);
              }
            }
            break;
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isMoreOpen, focusedIndex, moreFocusedIndex, primaryTools, secondaryTools]);

  const handlePrimaryToolClick = (tool: Tool) => {
    tool.action();
    setIsOpen(false);
    setIsMoreOpen(false);
    setFocusedIndex(-1);
    setMoreFocusedIndex(-1);
  };

  const handleSecondaryToolClick = (tool: Tool) => {
    tool.action();
    setIsOpen(false);
    setIsMoreOpen(false);
    setFocusedIndex(-1);
    setMoreFocusedIndex(-1);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsMoreOpen(false);
    setFocusedIndex(-1);
    setMoreFocusedIndex(-1);
  };

  const handleMoreClick = () => {
    setIsMoreOpen(!isMoreOpen);
    setMoreFocusedIndex(isMoreOpen ? -1 : 0);
  };

  const handleMoreHover = () => {
    if (window.innerWidth >= 640) { // Only auto-open on hover for desktop
      setIsMoreOpen(true);
      setMoreFocusedIndex(0);
    }
  };

  const handleMoreLeave = () => {
    if (window.innerWidth >= 640) { // Only auto-close on leave for desktop
      // Delay hiding to allow mouse movement to submenu
      setTimeout(() => {
        if (!moreDropdownRef.current?.matches(':hover')) {
          setIsMoreOpen(false);
          setMoreFocusedIndex(-1);
        }
      }, 100);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        ref={buttonRef}
        type="button"
        variant="ghost"
        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full px-3 py-1.5 text-sm transition-all duration-200 hover:scale-105 border border-gray-300 dark:border-gray-600"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Filter className="h-4 w-4" />
        <span>Tools</span>
        <ChevronDown 
          className={`h-3 w-3 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </Button>
      
      {/* Main Dropdown menu */}
      {isOpen && (
        <div 
          ref={dropdownRef}
          className={`absolute bottom-full left-0 mb-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg shadow-2xl p-3 w-56 z-50 transition-all duration-200 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          style={{ 
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}
          role="menu"
          aria-orientation="vertical"
        >
          {primaryTools.map((tool, index) => {
            const IconComponent = tool.icon;
            const isFocused = index === focusedIndex;
            
            return (
              <div key={tool.id}>
                <div
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-150 ${
                    isFocused 
                      ? 'bg-gray-700 dark:bg-gray-600' 
                      : 'hover:bg-gray-700 dark:hover:bg-gray-600'
                  }`}
                  onClick={() => handlePrimaryToolClick(tool)}
                  onMouseEnter={() => setFocusedIndex(index)}
                  role="menuitem"
                  tabIndex={-1}
                >
                  <IconComponent 
                    className={`h-5 w-5 transition-colors duration-150 ${
                      isFocused ? 'text-blue-400' : 'text-gray-300'
                    }`} 
                  />
                  <span className="text-sm font-medium">{tool.label}</span>
                </div>
                {tool.separator && (
                  <div className="h-px bg-gray-700 dark:bg-gray-600 my-1 mx-2" />
                )}
              </div>
            );
          })}
          
          {/* More option */}
          <div className="h-px bg-gray-700 dark:bg-gray-600 my-1 mx-2" />
          <div
            ref={moreButtonRef}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-150 relative ${
              focusedIndex === primaryTools.length 
                ? 'bg-gray-700 dark:bg-gray-600' 
                : 'hover:bg-gray-700 dark:hover:bg-gray-600'
            }`}
            onMouseEnter={() => {
              setFocusedIndex(primaryTools.length);
              handleMoreHover();
            }}
            onMouseLeave={handleMoreLeave}
            onClick={handleMoreClick}
            role="menuitem"
            tabIndex={-1}
          >
            <div className="flex items-center gap-3">
              <MoreHorizontal 
                className={`h-5 w-5 transition-colors duration-150 ${
                  focusedIndex === primaryTools.length ? 'text-blue-400' : 'text-gray-300'
                }`} 
              />
              <span className="text-sm font-medium">More</span>
            </div>
            <ChevronRight 
              className={`h-4 w-4 transition-colors duration-150 ${
                focusedIndex === primaryTools.length ? 'text-blue-400' : 'text-gray-300'
              }`} 
            />
          </div>
        </div>
      )}

      {/* Secondary "More" dropdown */}
      {isMoreOpen && (
        <div 
          ref={moreDropdownRef}
          className={`absolute bg-gray-900 dark:bg-gray-800 text-white rounded-lg shadow-2xl p-3 w-48 z-50 transition-all duration-200 ${
            isMoreOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } 
          bottom-full left-56 mb-2 ml-1
          sm:bottom-full sm:left-56 sm:mb-2 sm:ml-1
          max-sm:top-full max-sm:left-0 max-sm:mt-2 max-sm:ml-0 max-sm:mb-0`}
          style={{ 
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}
          role="menu"
          aria-orientation="vertical"
          onMouseEnter={() => setIsMoreOpen(true)}
          onMouseLeave={() => {
            if (window.innerWidth >= 640) {
              setIsMoreOpen(false);
              setMoreFocusedIndex(-1);
            }
          }}
        >
          {secondaryTools.map((tool, index) => {
            const IconComponent = tool.icon;
            const isFocused = index === moreFocusedIndex;
            
            return (
              <div
                key={tool.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-150 ${
                  isFocused 
                    ? 'bg-gray-700 dark:bg-gray-600' 
                    : 'hover:bg-gray-700 dark:hover:bg-gray-600'
                }`}
                onClick={() => handleSecondaryToolClick(tool)}
                onMouseEnter={() => setMoreFocusedIndex(index)}
                role="menuitem"
                tabIndex={-1}
              >
                <IconComponent 
                  className={`h-5 w-5 transition-colors duration-150 ${
                    isFocused ? 'text-blue-400' : 'text-gray-300'
                  }`} 
                />
                <span className="text-sm font-medium">{tool.label}</span>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};