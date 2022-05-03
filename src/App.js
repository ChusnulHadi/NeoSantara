import React, { Suspense, useEffect } from 'react';
import './loader.css';
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Navigation = React.lazy(() => import('./components/Navigation'));
const Services = React.lazy(() => import('./components/Services'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {

  return (
    <div className="App">
      <Suspense fallback={<div className="loader"></div>} >
        <Navigation />
        <Home />
        <About />
        <Services />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;


