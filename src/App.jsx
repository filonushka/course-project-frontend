import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import AllReviews from "./pages/AllReviews";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import Games from "./pages/Games";
import Home from "./pages/Home";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRoutes } from "./const";

function App() {
  return (
    <div className="body">
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <div className="main">
            <Routes>
              <Route path={AppRoutes.Home} element={<Home />} />
              <Route path={AppRoutes.AllReviews} element={<AllReviews />} />
              <Route path={AppRoutes.Movies} element={<Movies />} />
              <Route path={AppRoutes.Books} element={<Books />} />
              <Route path={AppRoutes.Games} element={<Games />} />
              <Route path="/review-details" element={<ReviewPage />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
