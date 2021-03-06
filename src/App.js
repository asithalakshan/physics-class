import './App.css';
import Navbar from './components/inc/Navbar';
import Header from './components/inc/Header';
import Particles from 'react-particles-js';

function App() {
  return (
    <div>
      <Particles
      className="particles-canves"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900 
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00",
            }
          }
        } 
      }}
      />
      <Navbar/>
      <Header/>
    </div>
  );
}

export default App;
