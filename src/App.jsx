import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { About, Home } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
