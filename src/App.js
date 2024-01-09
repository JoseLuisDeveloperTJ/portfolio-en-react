import React, {useState} from "react";
import AppRouter from "./AppRouter";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar'



export default function App() {
  return (
    <Router>
    
    <main className="text-gray-400 bg-gray-900 body-font min-h-screen w-screen overflow-x-hidden	">
     <NavBar />
      <AppRouter />
    </main>
    </Router>
   
  );
}




