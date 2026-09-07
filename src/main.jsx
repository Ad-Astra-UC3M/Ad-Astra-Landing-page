import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import { inject } from '@vercel/analytics';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './index.css'

import router from './app/router.jsx'

inject();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <SpeedInsights />
  </StrictMode>
)
