// https://jsonplaceholder.typicode.com/users
import axios from "axios";
import React from "react";
import {BrowserRouter,Route,Link, Routes} from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  // const getData=async()=>{
  //   const res=await fetch('https://jsonplaceholder.typicode.com/users')
  //   console.log(res,"rr")
  //   const data=await res.json()
  //   console.log(data,'ss')
  // }
  // getData()
  //   const getData=async()=>{
  //   const res=await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(res.data,'ss')
  // }
  // getData()

  return (
  <>
      <BrowserRouter>
      <nav>
  <Link to='/'>home</Link>
  <br/>
     <Link to='/about'>about</Link>
      <br/>
      <Link to='/contact'>contact</Link>
       <br/>
      </nav>

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>}/>
    <Route  path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  </>
  )
};

export default App;
