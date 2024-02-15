import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />

      <footer>
        This project was coded by Lucie Barbier-Dearnley. Open-sourced on{" "}
        <a
          href="https://github.com/luciebarbierdearnley/react-weather-app"
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  );
}
