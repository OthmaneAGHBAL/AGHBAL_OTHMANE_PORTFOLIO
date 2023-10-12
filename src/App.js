import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Formation } from './components/Formation';
import { Citation } from './components/Citation';
import { Bubbles } from './components/Bubbles';

function App() {
  return (
    <div className="App">
      <Bubbles/>
      <NavBar />
      <Banner />
      <Skills />
      <Formation/>
      <Citation/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
