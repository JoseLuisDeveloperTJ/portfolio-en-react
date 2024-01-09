// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

// Componentes:
import HomePage from "./pages/HomePage";

function AppRouter() {
  return (
    <Routes>
     <Route path="/" element={<HomePage />} /> {/* Enlaza la ruta raíz a HomePage */}
     <Route path="/proyectos/:projectId" element={<ProjectDetailsPage />} />
    </Routes>
  );
}

export default AppRouter;