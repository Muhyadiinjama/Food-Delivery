import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import Menu from "./pages/Menu.jsx";
import Navbar from "./components/Nav.jsx";
import NotFound from "./pages/Notfound.jsx";
import Footer from "./components/footer.jsx";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default App