

import { useState } from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Second from './components/second/Second';
import Third from './components/third/Third'
import Fourth from './components/fourth/Fourth';
import Fifth from './components/fifth/Fifth';
import Sixth from './components/sixth/Sixth';
import Seventh from './components/seventh/Seventh';
import Eight from './components/eight/Eight';
import Nineth from './components/nine/Nineth';
import Footer from './components/footer/Footer';


function App() {

  const [menu, setMenu] = useState(true)

  const handleMenu = () => {
    console.log('clicked')
      setMenu(prevMenu => !prevMenu)
  }


  return (
    <div className="App">
      <Navbar
        menuController={menu}
        handleClick={handleMenu} />
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eight />
      <Nineth />
      <Footer />

    </div>
  );
}

export default App;
