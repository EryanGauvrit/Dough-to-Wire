import { Cards } from "./components/Cards";
import logo from './assets/logo.png';
import { Timer } from "./components/Timer";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <Cards />
        <Timer />
      </main>
    </div>
  );
}

export default App;
