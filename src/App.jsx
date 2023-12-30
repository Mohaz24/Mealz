import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import Menu from "./components/Pages/Menu/Menu";
import BreakFast, {
  loader as breakFastLoader,
} from "./components/Pages/Menu/BreakFast";
import Dessert, {
  loader as dessertLoader,
} from "./components/Pages/Menu/Dessert";
import Beef, { loader as beefLoader } from "./components/Pages/Menu/Beef";
import Pork, { loader as porkLoader } from "./components/Pages/Menu/Pork";
import Seafood, {
  loader as seaFoodLoader,
} from "./components/Pages/Menu/Seafood";
import Vegan, { loader as veganLoader } from "./components/Pages/Menu/Vegan";
import Vegetarian, {
  loader as vegetarianLoader,
} from "./components/Pages/Menu/Vegetarian";

import Pasta, {loader as pastaLoader} from "./components/Pages/Menu/Pasta";
import Partners from "./components/Pages/Partners";
import Jobs from "./components/Pages/Jobs";
import Cart from "./components/Pages/Cart";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route
            path="/menu/breakfast"
            element={<BreakFast />}
            loader={breakFastLoader}
          />
          <Route
            path="/menu/dessert"
            element={<Dessert />}
            loader={dessertLoader}
          />
          <Route path="/menu/beef" element={<Beef />} loader={beefLoader} />
          <Route path="/menu/pork" element={<Pork />} loader={porkLoader} />
          <Route
            path="/menu/seafood"
            element={<Seafood />}
            loader={seaFoodLoader}
          />
          <Route path="/menu/vegan" element={<Vegan />} loader={veganLoader} />
          <Route
            path="/menu/vegetarian"
            element={<Vegetarian />}
            loader={vegetarianLoader}
          />
          <Route path="/menu/pasta" element={<Pasta />} loader={pastaLoader} />

          <Route path="partners" element={<Partners />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
