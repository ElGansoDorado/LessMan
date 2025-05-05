import './index.css'
import './reset.css'

import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";

import router from './configs/routesConfig.tsx';

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
