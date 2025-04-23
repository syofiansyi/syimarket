import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Page/Home";
import Layanan from "./assets/Page/Layanan";
import Login from "./assets/Page/Login";
import Detail from "./assets/Page/Detail";
import Kontak from "./assets/Page/Kontak";
import Faq from "./assets/Page/Faq";
import Testing from "./assets/Page/Testing";
import Notfound from "./assets/Page/NotFound"; 


const App = () => {
  
  return (
    <div className="flex flex-col min-h-screen max-w-full">

      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Layanan" element={<Layanan />} />
        <Route path="/Contact" element={<Kontak />} />
        <Route path="/Myaccount" element={<Layanan />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/Testing" element={<Testing />} />
        <Route path="*" element={<Notfound/>} />

      </Routes>
    </Router>
          
    </div>

    
  );
};

export default App;
