import { Header, EmployeeTable } from "./components";
import "./App.css";
import SearchIcon from "./assets/search.svg";
import { useEffect, useState } from "react";
import { IEmployee } from "./interfaces/IEmployee";
import { getEmployees } from "./services";

function App() {
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    getEmployees().then((data) => setEmployees(data));
  }, []);

  const activateInput = () => {
    document.getElementById("search-input")?.focus();
  };

  const filterEmployees = () => {
    return employees.filter(
      ({ name, job, phone }) =>
        name.toLowerCase().includes(search.toLowerCase()) ||
        job.toLowerCase().includes(search.toLowerCase()) ||
        phone.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredEmployees = search.length > 0 ? filterEmployees() : employees;

  return (
    <main>
      <Header />

      <div className="content-card">
        <div className="title-card">
          <h1 id="title">Funcionários</h1>

          <div className="search-card">
            <input
              id="search-input"
              type="text"
              placeholder="Pesquisar"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <img
              id="search-icon"
              src={SearchIcon}
              alt="Search"
              onClick={activateInput}
            />
          </div>
        </div>

        {employees.length > 0 && (
          <EmployeeTable employees={filteredEmployees} />
        )}
      </div>
    </main>
  );
}

export default App;
