import './global.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode as ReactStrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router.tsx';

const root = document.querySelector('#root');
const queryClient = new QueryClient();

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <ReactStrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ReactStrictMode>,
);
