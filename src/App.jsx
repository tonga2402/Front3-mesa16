import { Routes , Route } from "react-router-dom";
import Layout from "./components/Layout"
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Beer from './pages/Beer'
import NotFound from './pages/NotFound'

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/beer/:id" element={<Beer />}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>

  );
}

export default App
