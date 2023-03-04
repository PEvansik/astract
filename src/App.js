
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Second from './components/second/Second';
import Third from './components/third/Third'
import Fourth from './components/fourth/Fourth';
import Fifth from './components/fifth/Fifth';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
    </div>
  );
}

export default App;