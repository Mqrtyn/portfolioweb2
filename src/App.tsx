import { Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFB from "./components/ErrorFB.tsx";
import React from "react";
import Home from "./components/Home.tsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  
  return (
    <>
      <Header></Header>
      <ErrorBoundary FallbackComponent={ErrorFB}>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      </ErrorBoundary>
    </>
  );
}

export default App;