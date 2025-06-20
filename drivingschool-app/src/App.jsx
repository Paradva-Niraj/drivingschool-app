import './App.css'
import React, { lazy, Suspense } from 'react';

import Landing from './pages/Landing'
import Loading from './components/Loading.jsx';
//lazy loading components which use further in page
const Login = lazy(() => import('./pages/Login.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'))
const Enquiry = lazy(() => import('./pages/Enquiry.jsx'))

// package routes 
const Package = lazy(() => import('./pages/Package.jsx'))
const AddPackage = lazy(() => import('./pages/AddPackage.jsx'))

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={
          <Loading />
        }>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Home />} />


              {/* todo :: chnage this defult to any jsx file  */}

              
              <Route path="students" element={<div>Student Management</div>} />
              <Route path="staff" element={<div>Staff Management</div>} />
              
              <Route path="package" element={<Package />} />
              <Route path="addpackage" element={<AddPackage />} />
              
              <Route path="admin" element={<div>Admin Management</div>} />
              <Route path="Enquiry" element={<Enquiry />} />

              {/* temp file */}

            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
