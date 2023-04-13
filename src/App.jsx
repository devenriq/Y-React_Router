import { Link, Route, Routes, useParams } from "react-router-dom";

import { Home, Search, Tacos } from "./components";

import "./App.css";

function App() {
  const { taco } = useParams();

  return (
    <div className="relative h-screen w-full">
      <header className="flex flex-row justify-around items-center h-14 w-full">
        <h1 className="text-xl">React Router</h1>
        <nav>
          <ul className="flex flex-row gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/tacos">Tacos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/tacos/:taco" element={<Tacos />} />
      </Routes>
    </div>
  );
}

export default App;
