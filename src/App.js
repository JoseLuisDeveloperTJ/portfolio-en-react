import React, {useState} from "react";
import AppRouter from "./AppRouter";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/Navbar'
import CustomCursor from './components/CustomCursor';
import InfiniteTicker from './components/InfiniteTicker';


export default function App() {
  return (
    <Router>
    <CustomCursor />
    <main className="text-gray-400 bg-gray-900 body-font min-h-screen w-screen 	cursor-none">
     <NavBar />
      <AppRouter />
    <InfiniteTicker />
    </main>
    </Router>
   
  );
}




