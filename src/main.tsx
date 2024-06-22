import './global.css';

import { StrictMode as ReactStrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router.tsx';

const root = document.querySelector('#root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <ReactStrictMode>
    <RouterProvider router={router} />
  </ReactStrictMode>,
);
