import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Home from './Home';
import About from './Components/About/About';
import Contact from './Components/Contact';
import Mainblog from './Components/Blog/Mainblog';
import TestimnialCard from './Components/TestimnialCard';
import Blogdetailsection from './Components/Blogsdetailsection/Blogdetailsection';
import Findjob from './Components/Findjob/Findjob';
import Project from './Components/Project/Project';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mainblog" element={<Mainblog />} />
          <Route path="/testimnialCard" element={<TestimnialCard />} />
          <Route path="/blogdetailsection" element={<Blogdetailsection />} />
          <Route path="/findjob" element={<Findjob />} />
          <Route path="/project" element={<Project />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
