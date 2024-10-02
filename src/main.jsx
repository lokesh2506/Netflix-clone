import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.jsx';
import axios from 'axios';
import {Provider} from 'react-redux'
import { store } from '../Store/store.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient=new QueryClient();
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
