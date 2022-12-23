import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllReviews from "./pages/AllReviews";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import Games from "./pages/Games";
import Home from "./pages/Home";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import MyProfile from "./pages/MyProfilePage/MyProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import { appRoutes } from "./const";

function App() {
  return (
    <div className="body">
      <div className="wrapper">
        <Header />
        <div className="main">
          <Routes>
            <Route path={appRoutes.home} element={<Home />} />
            <Route path={appRoutes.allReviews} element={<AllReviews />} />
            <Route path={appRoutes.movies} element={<Movies />} />
            <Route path={appRoutes.books} element={<Books />} />
            <Route
              path="/review-details/:reviewTitle/:reviewId"
              element={<ReviewPage />}
            />
            <Route path={appRoutes.games} element={<Games />} />
            <Route path="/review-details" element={<ReviewPage />} />
            <Route path="/my-profile/:userId" element={<MyProfile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
