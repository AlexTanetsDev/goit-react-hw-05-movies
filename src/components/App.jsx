import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { Home } from "../Pages/Home";
import { Header } from "./Header/Header";


const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'))



export const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="movies" element={<Movies />}/>
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast/>} />
              <Route path="reviews" element={<Reviews/>} />
            </Route>
            <Route path="*" element={<Home />}/>
         </Routes>
      </Suspense>
      

      <GlobalStyles/>
    </>
  );
};
