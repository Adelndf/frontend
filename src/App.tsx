import { Routes, Route } from "react-router-dom";
import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import Portress from "./pages/Portress/Portress";
import Reservation from "./pages/Reservation/Reservation";
import SinglePortress from "./pages/SinglePortress/SinglePortress";
import Thanks from "./pages/Thanks/Thanks";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portress" element={<Portress />} />
        <Route path="/portress/:id" element={<SinglePortress />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/payment/success" element={<Thanks />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
