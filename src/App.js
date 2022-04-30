// import styled from 'styled-components';
// import Home from './components/Home';
// import About from './components/About';
// import Navigation from './components/Navigation';
import React, { Suspense, useEffect } from 'react';
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Navigation = React.lazy(() => import('./components/Navigation'));
function App() {

  useEffect(() => {
    console.log('mounted')
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading</div>} >
        <Navigation />
        <Home />
        <About />
      </Suspense>
    </div>
  );
}

export default App;


