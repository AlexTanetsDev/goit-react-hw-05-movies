import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { Home } from "./Home/Home";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
 
        </Route>
      </Routes>

      <GlobalStyles/>
    </>
  );
};
