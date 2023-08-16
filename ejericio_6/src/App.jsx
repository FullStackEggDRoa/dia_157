import { useState } from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { NavBar } from './componentes/Publicos/NavBar.jsx';
import Inicio from './componentes/Publicos/Inicio.jsx'
import { Footer } from './componentes/Publicos/Footer.jsx';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <>  
            <NavBar />
                <Routes>
                    <Route path={"/"} element={<Inicio />} />
                    
                </Routes>
            <Footer />
        </>
    </BrowserRouter>
  )
}

export default App
