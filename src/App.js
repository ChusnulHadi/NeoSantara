import styled from 'styled-components';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Home>
        <img src='/assets/images/datacenter.jpg' alt='datacenter'></img>
      </Home>
    </div>
  );
}

export default App;

export const Home = styled.div`
    position:absolute;
    top:0;
    img {
      width: 100vw;
    }
`

