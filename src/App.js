// import styled from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    console.log('mounted')
  }, []);
  
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
    </div>
  );
}

export default App;


