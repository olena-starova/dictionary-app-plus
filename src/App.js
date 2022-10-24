import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">StarDictionary</header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a href="https://spiffy-cucurucho-a2d46c.netlify.app/index.html">
              Olena Starova
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/olena-starova/dictionary-app-plus"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://astounding-swan-ddf508.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
