import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import Menu from "./pages/Menu.jsx";
import Navbar from "./components/Nav.jsx";
import NotFound from "./pages/Notfound.jsx";
import Footer from "./components/footer.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default App