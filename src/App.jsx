import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Fragments from './pages/Fragments';
import Tags from './pages/Tags';
import Info from './pages/Info';
import Form from './pages/Form';
import Header from './components/Header';
import './style.css'; 

function App() {
  return (
    <Router>
    <Header />
    <main className="main">
      <Routes>
        <Route path="/" element={<Fragments />} />

        <Route path="/fragments" element={<Fragments />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/info" element={<Info />} />
        
        <Route path="/new" element={<Form />} />
      </Routes>
    </main>
  </Router>
  );
}

export default App;
