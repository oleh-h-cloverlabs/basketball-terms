import { BrowserRouter, Route, Routes } from "react-router-dom";
import DiscoverView from "./views/DiscoverView";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import AppBar from "./components/AppBar";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Container className="app-container">
        <Sidebar />
        <Container className="main-container">
          <AppBar />
          <Routes>
            <Route path={routes.discovering} element={<DiscoverView />} />
            <Route path={routes.saved} />
          </Routes>
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
