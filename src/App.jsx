import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Header} from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header text="wine"/>
   </> 
   
  )
}

export default App
