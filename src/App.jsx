import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import Games from "./pages/Games";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="body">
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/books" element={<Books />} />
              <Route path="/games" element={<Games />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
