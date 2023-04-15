import Home from "./pages/home";
import "../src/main.css"
import Menu from "./pages/Menu";
import Reward from "./pages/Reward";
import { Route, Routes } from "react-router-dom"
import GiftCards from "./pages/GiftCards";
import Signin from "./pages/Signin";
import Joinnow from "./pages/Joinnow";
import Hotcoffees from "./pages/menu/hotcoffees";
import Food from "./pages/menu/food";
import Previous from "./pages/menu/previous";
import Favorite from "./pages/menu/favorite";
import Featured from "./pages/menu/featured";
function App() {
  return (
    <div className="App">
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rewards" element={<Reward />} />
      <Route path="/giftcards" element={<GiftCards />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/hotcoffees" element={<Hotcoffees />} />
      <Route path="/menu/food" element={<Food />} />
      <Route path="/menu/featured" element={<Featured />} />
      <Route path="/menu/previous" element={<Previous />} />
      <Route path="/menu/favorite" element={<Favorite />} />
      <Route path="/sign-in" element={<Signin/>} />
      <Route path="/join-now" element={<Joinnow/>} />


    </Routes>
    </div>
  );
}

export default App;
