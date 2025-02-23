// app/providers.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextTopLoader showSpinner={false} />
      <AntdRegistry>{children}</AntdRegistry>
      <Toaster />
    </QueryClientProvider>
  );
}