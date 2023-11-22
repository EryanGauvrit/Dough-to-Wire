import { Cards } from "./components/Cards";
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <Cards />
      </main>
    </div>
  );
}

export default App;
