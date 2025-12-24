import './globals.css';
import React from 'react';

export const metadata = {
  title: 'TAC Pre-Analisi',
  description: 'Pre-Analisi TAC',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
}
