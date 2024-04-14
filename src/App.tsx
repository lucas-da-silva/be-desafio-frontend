import { Header, EmployeeTable } from "./components";
import "./App.css";
import SearchIcon from "./assets/search.svg";
import { useEffect, useState } from "react";
import { IEmployee } from "./interfaces/IEmployee";
import { getEmployees } from "./services";

function App() {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    getEmployees().then((data) => setEmployees(data));
  }, []);

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
        {employees.length > 0 && <EmployeeTable employees={employees} />}
      </div>
    </main>
  );
}

export default App;
