import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';



const router = createBrowserRouter ([{
  path: "/",
  element: <Home />,
}])

function App() {
 return (<ThemeProvider theme={theme}>
  <CssBaseline/>
  <RouterProvider router={router}/>
 </ThemeProvider>);
}

export default App;
