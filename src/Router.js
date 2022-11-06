import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home, Register} from "./pages/"

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
