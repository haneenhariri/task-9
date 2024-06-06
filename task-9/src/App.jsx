import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ServiceH from './pages/ServiceH/Service';
import Menu from './pages/Menu/menu'
import Contact from './pages/Contact/Contact';
function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/serv' element={<ServiceH/>}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>
    </>
  )
}

export default App
