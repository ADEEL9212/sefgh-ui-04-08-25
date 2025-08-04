import React, { useState, useEffect, useRef } from 'react';
import { X, Save, Download, FileText, Code, Type, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

interface CanvasData {
  id: string;
  title: string;
  content: string;
  mode: 'markdown' | 'code' | 'text';
  lastModified: Date;
}

interface CanvasPanelProps {
  isOpen: boolean;
  canvas: CanvasData | null;
  hasUnsavedChanges: boolean;
  onClose: () => void;
  onSave: (canvas: CanvasData) => void;
  onContentChange: (content: string) => void;
  onTitleChange: (title: string) => void;
  onModeChange: (mode: 'markdown' | 'code' | 'text') => void;
}

export const CanvasPanel: React.FC<CanvasPanelProps> = ({
  isOpen,
  canvas,
  hasUnsavedChanges,
  onClose,
  onSave,
  onContentChange,
  onTitleChange,
  onModeChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);

  // Auto-save functionality
  useEffect(() => {
    if (!canvas || !hasUnsavedChanges) return;

    const autoSaveTimer = setTimeout(() => {
      handleSave(true); // Silent autosave
    }, 30000); // Auto-save every 30 seconds

    return () => clearTimeout(autoSaveTimer);
  }, [canvas?.content, hasUnsavedChanges]);

  useEffect(() => {
    if (canvas) {
      setTempTitle(canvas.title);
    }
  }, [canvas]);

  useEffect(() => {
    if (isOpen && editorRef.current) {
      editorRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 's':
            e.preventDefault();
            handleSave();
            break;
          case 'Escape':
            handleClose();
            break;
        }
      }
      
      if (e.key === 'Escape' && !e.ctrlKey && !e.metaKey) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, canvas]);

  const handleSave = (isAutoSave = false) => {
    if (!canvas) return;
    
    const now = new Date();
    onSave({
      ...canvas,
      lastModified: now,
    });
    
    setLastSaved(now);
    
    if (isAutoSave) {
      toast({
        title: "Autosaved",
        description: `Autosaved at ${now.toLocaleTimeString()}`,
        duration: 2000,
      });
    } else {
      toast({
        title: "Canvas saved",
        description: "Your document has been saved successfully",
        duration: 2000,
      });
    }
  };

  const handleExport = () => {
    if (!canvas) return;

    const element = document.createElement('a');
    const file = new Blob([canvas.content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    
    const extension = canvas.mode === 'markdown' ? '.md' : canvas.mode === 'code' ? '.txt' : '.txt';
    element.download = `${canvas.title}${extension}`;
    
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Canvas exported",
      description: `Downloaded as ${canvas.title}${extension}`,
      duration: 2000,
    });
  };

  const handleClose = () => {
    if (hasUnsavedChanges) {
      const confirmed = window.confirm('You have unsaved changes. Are you sure you want to close?');
      if (!confirmed) return;
    }
    
    setIsClosing(true);
    // Give time for exit animation before actually closing
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleTitleEdit = () => {
    setIsEditing(true);
    setTimeout(() => titleInputRef.current?.focus(), 0);
  };

  const handleTitleSave = () => {
    if (tempTitle.trim()) {
      onTitleChange(tempTitle.trim());
    }
    setIsEditing(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTitleSave();
    } else if (e.key === 'Escape') {
      setTempTitle(canvas?.title || '');
      setIsEditing(false);
    }
  };

  const getDocumentStatus = () => {
    if (hasUnsavedChanges) return "Unsaved";
    if (lastSaved) return "Saved";
    return "New Document";
  };

  const getStatusColor = () => {
    if (hasUnsavedChanges) return "destructive";
    if (lastSaved) return "secondary";
    return "default";
  };

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case 'markdown': return FileText;
      case 'code': return Code;
      case 'text': return Type;
      default: return FileText;
    }
  };

  const getModeLabel = (mode: string) => {
    switch (mode) {
      case 'markdown': return '📝';
      case 'code': return '</>';
      case 'text': return 'T';
      default: return '📝';
    }
  };

  if (!isOpen || !canvas) return null;

  const ModeIcon = getModeIcon(canvas.mode);

  return (
    <>
      {/* Backdrop */}
      <div className="canvas-backdrop" onClick={handleClose} />
      
      {/* Canvas Panel */}
      <div className={`
        fixed top-0 right-0 h-full bg-background border-l shadow-2xl z-50
        ${isMobile ? 'w-full' : 'w-[40%] lg:w-[35%] xl:w-[30%]'}
        ${isClosing ? 'canvas-panel-exit' : 'canvas-panel-enter'}
        flex flex-col
      `}>
        <Card className="h-full rounded-none border-0 flex flex-col">
          {/* Header Bar */}
          <CardHeader className="flex-row items-center justify-between space-y-0 p-4 border-b bg-muted/30">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Mobile Back Button */}
              {isMobile && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handleClose}
                      className="canvas-header-button h-8 w-8 p-0"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Back</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {/* Document Status */}
              <Select value={getDocumentStatus()} disabled>
                <SelectTrigger className="w-[120px] h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
              </Select>
              
              {/* Document Icon and Title */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <ModeIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                
                {isEditing ? (
                  <input
                    ref={titleInputRef}
                    value={tempTitle}
                    onChange={(e) => setTempTitle(e.target.value)}
                    onBlur={handleTitleSave}
                    onKeyDown={handleTitleKeyDown}
                    className="flex-1 text-sm font-semibold bg-transparent border-b border-primary focus:outline-none"
                    placeholder="Document title"
                  />
                ) : (
                  <h2 
                    className="text-sm font-semibold cursor-pointer hover:text-primary truncate flex-1"
                    onClick={handleTitleEdit}
                    title={canvas.title}
                  >
                    {canvas.title}
                  </h2>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Document Type Toggle Buttons */}
              <div className="flex items-center gap-1 bg-muted/50 rounded-md p-1 border">
                {(['text', 'markdown', 'code'] as const).map((mode) => (
                  <Tooltip key={mode}>
                    <TooltipTrigger asChild>
                      <Button
                        variant={canvas.mode === mode ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => onModeChange(mode)}
                        className={`h-7 w-7 p-0 text-xs canvas-header-button ${
                          canvas.mode === mode ? 'canvas-mode-active' : ''
                        }`}
                      >
                        {getModeLabel(mode)}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{mode.charAt(0).toUpperCase() + mode.slice(1)} Mode</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>

              {/* Export and Save Buttons */}
              {!isMobile && (
                <>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleSave()} 
                        className="canvas-header-button h-8 w-8 p-0"
                        disabled={!hasUnsavedChanges}
                      >
                        <Save className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Save Progress (Ctrl+S)</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={handleExport}
                        className="canvas-header-button h-8 w-8 p-0"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download Document</p>
                    </TooltipContent>
                  </Tooltip>
                </>
              )}

              {/* Close Button */}
              {!isMobile && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handleClose}
                      className="canvas-header-button h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Close Canvas (Esc)</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {/* Status Badge */}
              <Badge variant={getStatusColor() as any} className="text-xs ml-2">
                {getDocumentStatus()}
              </Badge>
            </div>
          </CardHeader>

          {/* Editor Body */}
          <CardContent className="flex-1 p-0 overflow-hidden flex flex-col">
            <textarea
              ref={editorRef}
              value={canvas.content}
              onChange={(e) => onContentChange(e.target.value)}
              placeholder="Start writing your code document..."
              className={`
                w-full flex-1 p-6 border-0 outline-none resize-none leading-relaxed
                canvas-editor canvas-editor-auto-resize
                ${canvas.mode === 'code' ? 'font-mono text-sm' : 'font-sans text-base'}
                placeholder:text-gray-400 dark:placeholder:text-gray-500
              `}
            />
            
            {/* Mobile Action Bar */}
            {isMobile && (
              <div className="flex items-center justify-between p-4 border-t bg-muted/30 gap-3">
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleSave()}
                    disabled={!hasUnsavedChanges}
                  >
                    <Save className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleExport}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </Button>
                </div>
                
                {lastSaved && (
                  <p className="text-xs text-muted-foreground">
                    Saved {lastSaved.toLocaleTimeString()}
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};