import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '@views/Home';
import { NotFound } from '@views/NotFound';
import { Navbar } from '@components/Navbar';
// import { ProtectedRoute } from '@components/ProtectedRoute';
import Profile from '@views/Profile';
import { Details } from '@views/Details';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/anime/:animeId" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/genre/:genre" element={<Details />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
};

export default App;
