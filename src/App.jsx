import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Home from './Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
