import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import 'bulma/css/bulma.css'

import './App.css';

import Paths from './parts/Paths';
// import HomeScreen from './parts/Homepage/HomeScreen';
const HomeScreen = lazy(()=> import('./parts/Homepage/HomeScreen'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,},},},);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter >
        <Routes>
          <Route path="" element={<Suspense fallback={<>Loading...</>} ><div className='App'><HomeScreen /></div></Suspense>}/>
          <Route path="*" element={<div className='App'><Paths /></div>} />
        </Routes>

      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
