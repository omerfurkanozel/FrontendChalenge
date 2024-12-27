import { useState } from 'react'



import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';
import Projects from './components/Projects';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
      <Projects/>
     
     
    </>
  )
}

export default App
