import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { Home } from "../Pages/Home";
import { Movies } from "Pages/Movies";
import { MovieDetails } from "Pages/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { Header } from "./Header";

export const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Routes>

      <GlobalStyles/>
    </>
  );
};