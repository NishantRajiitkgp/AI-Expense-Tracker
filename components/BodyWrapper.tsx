'use client';

import { useEffect } from 'react';

interface BodyWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function BodyWrapper({ children, className, style }: BodyWrapperProps) {
  useEffect(() => {
    // Apply any dynamic classes that might be added by browser extensions
    // This ensures the server and client render the same content
    const body = document.body;
    
    // Store original classes
    const originalClasses = body.className;
    
    // Clean up any extension-added classes that might cause hydration issues
    const cleanClasses = originalClasses
      .split(' ')
      .filter(cls => !cls.startsWith('vsc-') && !cls.startsWith('domain-'))
      .join(' ');
    
    if (cleanClasses !== originalClasses) {
      body.className = cleanClasses;
    }
    
    // Apply our custom classes
    if (className) {
      body.className = `${body.className} ${className}`.trim();
    }
    
    // Apply styles
    if (style) {
      Object.assign(body.style, style);
    }
    
    // Cleanup function
    return () => {
      // Restore original classes if needed
      body.className = originalClasses;
    };
  }, [className, style]);

  return <>{children}</>;
}
