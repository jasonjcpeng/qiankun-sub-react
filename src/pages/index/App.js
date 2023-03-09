import logo from '../../imgs/logo.svg';
import { useNavigate } from "react-router-dom";
import './style.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p
          className="App-link"
          onClick={(event) => {
            event.preventDefault();
            navigate('/team');
          }}>
          Jump To Team page
        </p>
        <p
          className="App-link"
          onClick={(event) => {
            event.preventDefault();
            window.qiankunRouter('/vue?aa=123')
          }}>
          Jump To VUE
        </p>
      </header>
    </div>
  );
}

export default App;
