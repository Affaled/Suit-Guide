import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Drawer />
      <div className="App">
        <Header />
        <Home />
      </div>
    </>
  );
}
