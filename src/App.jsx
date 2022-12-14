import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Movies from "./pages/Movies";
import Books from "./pages/Books";
import Games from "./pages/Games";
import Home from "./pages/Home";
import ReviewPage from "./pages/reviewPage/reviewPage";
import MyProfile from "./pages/myProfilePage/MyProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./pages/signInPage/SignIn";
import Login from "./pages/loginPage/Login";

import { appRoutes } from "./const";
import { fetchAuthMe } from "./redux/slicers/auth";

function App() {
  // const dispatch = useDispatch();
  // const { reviews } = useSelector((state) => state.reviews);

  // React.useEffect(() => {
  //   dispatch(fetchAuthMe());
  // }, [dispatch]);

  return (
    <div className="body">
      <div className="wrapper">
        <Header />
        <div className="main">
          <Routes>
            <Route path={appRoutes.home} element={<Home />} />
            <Route path={appRoutes.movies} element={<Movies />} />
            <Route path={appRoutes.books} element={<Books />} />
            {/* {reviews.items.map((obj) => (
              ))} */}
            <Route path={`/review-details/:id`} element={<ReviewPage />} />
            <Route path={appRoutes.games} element={<Games />} />
            <Route path="/register" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
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
