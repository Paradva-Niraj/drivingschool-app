import './App.css'
import React, { lazy, Suspense } from 'react';

import Landing from './pages/Landing'

//lazy loading components which use further in page
const Login = lazy(()=>import('./pages/Login.jsx'))
const Home = lazy(()=>import('./pages/Home.jsx'))
const Dashboard = lazy(()=>import('./pages/Dashboard.jsx'))

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loding</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
