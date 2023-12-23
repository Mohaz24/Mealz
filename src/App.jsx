import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import Menu from "./components/Pages/Menu/Menu";
import BreakFast from "./components/Pages/Menu/BreakFast";
import Beef from "./components/Pages/Menu/Beef";
import Dessert from "./components/Pages/Menu/Dessert";
import Pork from "./components/Pages/Menu/Pork";
import Seafood from "./components/Pages/Menu/Seafood";
import Vegan from "./components/Pages/Menu/Vegan";
import Vegetarian from "./components/Pages/Menu/Vegetarian";
import Pasta from "./components/Pages/Menu/Pasta";
import Partners from "./components/Pages/Partners";
import Jobs from "./components/Pages/Jobs";
import Cart from "./components/Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="/menu/breakfast" element={<BreakFast />} />
          <Route path="/menu/dessert" element={<Dessert />} />
          <Route path="/menu/beef" element={<Beef />} />
          <Route path="/menu/pork" element={<Pork />} />
          <Route path="/menu/seafood" element={<Seafood />} />
          <Route path="/menu/vegan" element={<Vegan />} />
          <Route path="/menu/vegetarian" element={<Vegetarian />} />
          <Route path="/menu/pasta" element={<Pasta />} />

          <Route path="partners" element={<Partners />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
