import './App.css';
import MainPage from './parts/loginpage/MainPage';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Placeholder from './Placeholder';

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
          <Route path="" element={<div className='App grey'><Placeholder/><MainPage/></div>}/>

          <Route path="/log">
            <Route path=':parameters' element={<div className='App grey'><Placeholder/><MainPage/></div>}>     
            </Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
