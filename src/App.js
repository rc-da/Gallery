import { BrowserRouter, Routes, Route } from "react-router-dom";

import Gallery from "./pages/Gallery";
import WelcomePage from "./pages/WelcomePage";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<WelcomePage />} />
          <Route path="/search" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
