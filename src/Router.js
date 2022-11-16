import React from "react"
import { Routes, Route } from "react-router-dom"
import {
  Home,
  Verkaufen,
  Datenschutz,
  Impressum,
  AGB,
  Kontakt,
  Widerruf,
} from "./pages/"

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verkaufen" element={<Verkaufen />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/widerruf" element={<Widerruf />} />
      </Routes>
    </>
  )
}
