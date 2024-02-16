import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />

      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/luciebarbierdearnley"
          target="_blank"
          rel="noreferrer">
          Lucie Barbier-Dearnley
        </a>
        . Open-sourced on{" "}
        <a
          href="https://github.com/luciebarbierdearnley/react-weather-app"
          target="_blank"
          rel="noreferrer">
          GitHub
        </a>
        . Hosted on{" "}
        <a
          href="https://react-weather-application-lbd.netlify.app/"
          target="_blank"
          rel="noreferrer">
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
