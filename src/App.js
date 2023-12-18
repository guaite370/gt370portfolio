import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { BrowserRouter, Route as PiRoute, Routes } from 'react-router-dom'
function App() {

  const ReactAboutComponent = <div className="App">
    <header className="App-header">
      <img src="/test.png" className="App-logo" alt="logo" />
      <p>This is Jinya Wang's portfolio</p>
      <a
        className="App-link"
        href="https://issuu.com/jinyawang"
        target="_blank"
        rel="noopener noreferrer"
        >
        See my portfolio online
      </a>
      <a
        className="App-link"
        href="/"
        rel="noopener noreferrer"
      >
        About Me
      </a>
      <a
        className="App-link"
        href="/S"
      >
        Skills
      </a>
      <a
        className="App-link"
        href="/C"
        rel="noopener noreferrer"
      >
        Contact
      </a>
      <a
        className="App-link"
        href="/P"
        rel="noopener noreferrer"
      >
        Projects
      </a>
    </header>
  </div>

  return (
    <BrowserRouter>
      <Routes>
        <PiRoute path="/" element={<About />}/>
        <PiRoute path="/react-about" element={ReactAboutComponent}/>
        <PiRoute path="/C" element={<Contact />}/>
        <PiRoute path="/S" element={<Skills />}/>
        <PiRoute path="/P" element={<Projects />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
