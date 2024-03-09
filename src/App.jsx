import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import { Boxes } from "./components/ui/background-boxes";
import { cn } from "../utils/cn";
import Projectsb from "./pages/Projectsb";
const App = () => {
  return (
    <main className='bg-slate-300/20 overflow-hidden'>
      <div className="absolute inset-0 w-full h-full  bg-slate-100 overflow-x-hidden z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path="/projectb" element={<Projectsb />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
