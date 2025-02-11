import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { HashRouter, Routes, Route,Outlet } from "react-router-dom";
// import { createBrowserRouter,RouterProvider } from "react-router";
import ResturantMenu from "./src/components/ResturantMenu";
// import Grocery from "./src/components/Grocery";
// Chunking
// Code Splitting
// Dynamic Bundling
// lazy loading
// on demand loading
// Dynamic import



const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="grocery"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Grocery />
              </Suspense>
            }
          />
          <Route path="resturantMenu/:resid" element={<ResturantMenu />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
