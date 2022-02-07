import "./App.css";
import { Router } from "@reach/router";
import LukeApiwalker from "./components/LukeApiwalker";
import CharacterById from "./components/CharacterById";

function App() {
  return (
    <div className="App">
      <Router>
        <LukeApiwalker path="/" />
        <CharacterById path="/:id" />
      </Router>
    </div>
  );
}

export default App;
