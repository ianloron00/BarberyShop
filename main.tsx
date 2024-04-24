import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Marketplace from './pages/marketplace/Marketplace.tsx';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route path="marketplace" element={<Marketplace />} /> */}
        </Route>
        <Route path="marketplace" element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
// .render(
  // <React.StrictMode>
    {/* <App /> */}
  {/* </React.StrictMode>, */}
// )

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
