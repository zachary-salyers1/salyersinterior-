import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import AdminLogin from './pages/admin/AdminLogin';
import ProjectList from './pages/admin/ProjectList';
import ProjectForm from './pages/admin/ProjectForm';
import { ErrorBoundary } from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route 
            path="/admin/projects" 
            element={
              <ProtectedRoute>
                <ProjectList />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/projects/new" 
            element={
              <ProtectedRoute>
                <ProjectForm />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/projects/:id/edit" 
            element={
              <ProtectedRoute>
                <ProjectForm />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;