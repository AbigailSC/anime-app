import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '@views/Home';
import { Landing } from '@views/Landing';
import { NotFound } from '@views/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default App;
