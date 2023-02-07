/* eslint-disable react/no-children-prop */
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '@views/Home';
import { Landing } from '@views/Landing';
import { NotFound } from '@views/NotFound';
import { Navbar } from '@components/Navbar';
import { ProtectedRoute } from '@components/ProtectedRoute';
import Profile from '@views/Profile';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
};

export default App;
