import { Header } from "./components";
import "./App.css";
import SearchIcon from "./assets/search.svg";

function App() {
  return (
    <main>
      <Header />
      <div className="content-card">
        <div className="title-card">
          <h1 className="title">Funcionários</h1>

          <div className="search-card">
            <input
              className="search-input"
              type="text"
              placeholder="Pesquisar"
            />
            <img className="search-icon" src={SearchIcon} alt="Search" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
