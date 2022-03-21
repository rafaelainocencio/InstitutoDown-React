import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Ebooks from './Pages/ebooks';
import Vagas from './Pages/vagas';
import Rodape from './Components/rodape';
import Candidatar from './Pages/candidatar';
import Navbar from './Components/navbar';
import QuemSomos from './Pages/sobreNos/quemSomos'
import OQueFazemos from './Pages/sobreNos/oQueFazemos'
import SindromeDeDown from './Pages/Capacitacao/SindromeDeDown'
import Capacitacao from './Pages/Capacitacao/CapacitacaoProfissional'
import PorQueContratar from './Pages/MercadoDeTrabalho/porQueContratar'
import CadastroEmpresa from './Pages/Cadastros/empresas'

import RegistrarUsuario from './Pages/RegistrarUsuario';
import RegistrarEmpresa from './Pages/RegistrarEmpresa';

import CadastroUsuario from './Pages/Cadastros/usuarios';


function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar />
        <main className='principal container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/quemsomos' element={<QuemSomos />} />
            <Route path='/oquefazemos' element={<OQueFazemos/>} />
            <Route path='/sindromededown' element={<SindromeDeDown/>} />
            <Route path='/capacitacaoprofissional' element={<Capacitacao/>} />
            <Route path='/porquecontratar' element={<PorQueContratar/>} />

            <Route path="/registrar/empresa" element={<RegistrarEmpresa />} />
            <Route path="/registrar/usuario" element={<RegistrarUsuario />} />

            <Route path='/cadastroempresa' element={<CadastroEmpresa/>} />
            <Route path='/cadastrousuario' element={<CadastroUsuario/>} />
            
            <Route path="/ebooks" element={<Ebooks />} />
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
