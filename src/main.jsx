import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
const queryClient = new QueryClient();

/**
 * @module Main
 * @description The Main module is the entry point of the application.
 * It sets up the React Query client ({@link https://tanstack.com/query/latest/docs/framework/react/overview}) and renders the App ({@link module:App}) component within
 * the QueryClientProvider, which enables efficient data fetching and async state
 * management throughout the application.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
