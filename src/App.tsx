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

  const filteredEmployees =
    search.length > 0
      ? employees.filter(
          ({ name, job, phone }) =>
            name.toLowerCase().includes(search.toLowerCase()) ||
            job.toLowerCase().includes(search.toLowerCase()) ||
            phone.toLowerCase().includes(search.toLowerCase())
        )
      : employees;

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
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <img className="search-icon" src={SearchIcon} alt="Search" />
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
