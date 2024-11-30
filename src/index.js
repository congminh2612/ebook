import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import RenderRouter, { mainRouter } from './router';
import './Style/style.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={mainRouter} />);
