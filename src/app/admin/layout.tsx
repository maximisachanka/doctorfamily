'use client';

import { SessionProvider } from 'next-auth/react';
import { AlertProvider } from '@/components/common/SMAlert/AlertProvider';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <AlertProvider>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </AlertProvider>
    </SessionProvider>
  );
}
