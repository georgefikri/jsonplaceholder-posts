// land of the thousand imports
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/home";
import { DetailsViewPage } from "./Pages/detailsView";
// land of the thousand imports

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
