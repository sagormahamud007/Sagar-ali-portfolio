import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className='max-w-[1440px] mx-auto bg-slate-300'>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
