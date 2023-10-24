import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Produto from './Produto';
import CadastroCliente from '../templates/CadastroCliente';
import CadastroPet from './CadastroPet';
import Listagens from './Listagens';
import Servico from './Servico';
import './designe.css';

function App() {
  return (
    <Router>
      <div>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Cliente">Cliente</Link>
            </li>
            <li>
              <Link to="/CadastroPet">Pet</Link>
            </li>
            <li>
              <Link to="/Produto">Produto</Link>
            </li>
            <li>
              <Link to="/Servico">Serviço</Link>
            </li>
            <li>
              <Link to="/Listagens">Listagens</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CadastroCliente" element={<CadastroCliente />} />
          <Route path="/CadastroPet" element={<CadastroPet />} />
          <Route path="/Produto" element={<Produto />} />
          <Route path="/Servico" element={<Servico />} />
          <Route path="/Listagens" element={<Listagens />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


