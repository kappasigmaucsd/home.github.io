import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import { useOnClickOutside } from "./hooks";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";

import "./scss/App.scss";

/* Burger menu */
import Navbar from "./components/navbar";

/* import homepage components */
import {
  Splash,
  Home,
  About,
  Rush,
  Leadership,
  Contact,
  NotFound,
} from "./components";
import Footer from "./components/footnote";

const App = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const node = useRef();
  const location = useLocation();

  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      {isLoading && location.pathname === "/" ? (
        <Splash />
      ) : (
        <>
          <Navbar open={open} setOpen={setOpen} node={node} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rush" element={<Rush />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
