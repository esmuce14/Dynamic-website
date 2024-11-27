import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Header} from './components/Header'
import { Home } from './Pages/Home'
import { About } from './Pages/About';
import { Signup } from './Pages/Signup';
import { Routes,Route } from 'react-router-dom';
import { Client, Databases } from 'appwrite';

function App() {

  const client = new Client();
  client.setProject('6746c31a001528173514');
  client.setEndpoint("https://cloud.appwrite.io/v1")
  //const [count, setCount] = useState(0)

  const database= new Databases(client)




  return (
   <>
    <Header text="wine"/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<Signup/>}/>
    </Routes>
   </> 
   
  )
}

export default App
