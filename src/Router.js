import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home, Verkaufen, Datenschutz } from "./pages/"

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verkaufen" element={<Verkaufen />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </>
  )
}
