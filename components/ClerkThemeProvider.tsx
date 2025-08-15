'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from '@/contexts/ThemeContext';

interface ClerkThemeProviderProps {
  children: React.ReactNode;
}

export default function ClerkThemeProvider({
  children,
}: ClerkThemeProviderProps) {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === 'dark' ? dark : undefined,
        variables: {
          colorPrimary: theme === 'dark' ? '#9ca3af' : '#059669', // light gray for dark theme
          colorBackground: theme === 'dark' ? '#000000' : '#ffffff', // pure black for dark theme
          colorInputBackground: theme === 'dark' ? '#374151' : '#f9fafb', // dark gray inputs
          colorInputText: theme === 'dark' ? '#f3f4f6' : '#1f2937',
          colorText: theme === 'dark' ? '#ffffff' : '#1f2937', // white text for dark theme
          colorTextSecondary: theme === 'dark' ? '#9ca3af' : '#6b7280', // light gray for subtitles
          borderRadius: '0.5rem', // slightly rounded corners like in the image
        },
        elements: {
          formButtonPrimary: {
            backgroundColor: theme === 'dark' ? '#9ca3af' : '#059669', // light gray button
            color: theme === 'dark' ? '#000000' : '#ffffff', // black text on light gray
            '&:hover': {
              backgroundColor: theme === 'dark' ? '#d1d5db' : '#047857', // lighter gray on hover
            },
            borderRadius: '0.5rem',
            fontWeight: '500',
          },
          formButtonSecondary: {
            backgroundColor: theme === 'dark' ? '#4b5563' : '#f3f4f6', // darker gray for secondary button
            color: theme === 'dark' ? '#ffffff' : '#374151', // white text on dark gray
            border: theme === 'dark' ? '1px solid #6b7280' : '1px solid #d1d5db',
            '&:hover': {
              backgroundColor: theme === 'dark' ? '#6b7280' : '#e5e7eb',
            },
            borderRadius: '0.5rem',
            fontWeight: '500',
          },
          card: {
            backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff', // dark gray card
            boxShadow: theme === 'dark' ? '0 10px 25px -5px rgba(0, 0, 0, 0.8)' : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            borderRadius: '0.75rem',
            border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
          },
          headerTitle: {
            color: theme === 'dark' ? '#ffffff' : '#1f2937', // white title
            fontSize: '1.5rem',
            fontWeight: '700',
          },
          headerSubtitle: {
            color: theme === 'dark' ? '#9ca3af' : '#6b7280', // light gray subtitle
            fontSize: '0.875rem',
          },
          socialButtonsBlockButton: {
            backgroundColor: theme === 'dark' ? '#4b5563' : '#f3f4f6', // darker gray for social buttons
            color: theme === 'dark' ? '#ffffff' : '#374151',
            border: theme === 'dark' ? '1px solid #6b7280' : '1px solid #d1d5db',
            '&:hover': {
              backgroundColor: theme === 'dark' ? '#6b7280' : '#e5e7eb',
            },
            borderRadius: '0.5rem',
            fontWeight: '500',
          },
          dividerLine: {
            backgroundColor: theme === 'dark' ? '#4b5563' : '#d1d5db',
          },
          dividerText: {
            color: theme === 'dark' ? '#9ca3af' : '#6b7280',
          },
          formFieldInput: {
            backgroundColor: theme === 'dark' ? '#374151' : '#f9fafb', // dark gray input background
            color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
            border: theme === 'dark' ? '1px solid #6b7280' : '1px solid #d1d5db',
            borderRadius: '0.5rem',
            '&:focus': {
              borderColor: theme === 'dark' ? '#9ca3af' : '#059669',
              boxShadow: theme === 'dark' ? '0 0 0 2px rgba(156, 163, 175, 0.2)' : '0 0 0 2px rgba(5, 150, 105, 0.2)',
            },
          },
          formFieldLabel: {
            color: theme === 'dark' ? '#ffffff' : '#374151', // white labels
            fontWeight: '500',
          },
          footerAction: {
            color: theme === 'dark' ? '#9ca3af' : '#6b7280',
          },
          footerActionLink: {
            color: theme === 'dark' ? '#9ca3af' : '#059669',
            textDecoration: 'underline',
            '&:hover': {
              color: theme === 'dark' ? '#d1d5db' : '#047857',
            },
          },
          formFieldLabelRow: {
            justifyContent: 'space-between',
          },
          formFieldRow: {
            marginBottom: '1rem',
          },
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}