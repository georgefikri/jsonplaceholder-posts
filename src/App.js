// land of the thousand imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/home";
import { DetailsViewPage } from "./Pages/detailsView";
import Container from "react-bootstrap/Container";
// land of the thousand imports

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/jsonplaceholder-posts/" element={<HomePage />} />
          <Route path="/details" element={<DetailsViewPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
