import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Pages/Home';
import Ebooks from './Pages/ebooks';
import Vagas from './Pages/vagas';
import Rodape from './Components/rodape';
import Candidatar from './Pages/candidatar';


function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar />
        <main className='principal container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livros" element={<Ebooks />} />
            <Route path="/vagas" element={<Vagas />} />
            <Route path='/vagas/candidatura'>
              <Route path=':id' element={<Candidatar />} />
            </Route>
          </Routes>
        </main>
        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default App;
