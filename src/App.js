import React, { Suspense, useEffect } from 'react';
import './loader.css';
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Navigation = React.lazy(() => import('./components/Navigation'));

function App() {

  useEffect(() => {
    console.log('mounted')
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div className='loader'></div>} >
        <Navigation />
        <Home />
        <About />
      </Suspense>
    </div>
  );
}

export default App;


