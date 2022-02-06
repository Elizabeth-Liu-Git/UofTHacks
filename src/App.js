import Home from './Pages/Home.js'
import Swap from './Pages/Swap.js'
import Cart from './Pages/Cart.js'
import Profile from './Pages/Profile.js'
import NavBar from './components/NavBar.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <NavBar />
    </Router>
  );
}

export default App;
