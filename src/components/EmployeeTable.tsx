import { useEffect, useState } from "react";
import { IEmployee } from "../interfaces/IEmployee";
import "./Table.css";
import ArrowDown from "../assets/arrow-down.svg";
import ArrowUp from "../assets/arrow-up.svg";

type TableProps = {
  employees: IEmployee[];
};

const DESKTOP_MIN_WIDTH = 650;

export function EmployeeTable({ employees }: TableProps) {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > DESKTOP_MIN_WIDTH
  );
  const [employeeDetailsId, setEmployeeDetailsId] = useState<{
    [id: string]: number;
  }>({});

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > DESKTOP_MIN_WIDTH);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleEmployeeDetailsId = (id: number) => {
    if (employeeDetailsId[id]) {
      setEmployeeDetailsId((prevState) => {
        delete prevState[id];
        return { ...prevState };
      });
    } else {
      setEmployeeDetailsId((prevState) => ({ ...prevState, [id]: id }));
    }
  };

  return (
    <table id="employee-table">
      <thead className="table-header">
        <tr>
          <th>FOTO</th>
          <th>NOME</th>
          {isDesktop ? (
            <>
              <th>CARGO</th>
              <th>DATA DE ADMISSÃO</th>
              <th>TELEFONE</th>
            </>
          ) : (
            <th>
              <div id="empty-column" />
            </th>
          )}
        </tr>
      </thead>

      <tbody className="table-body">
        {employees.map(({ id, name, image, job, admissionDate, phone }) => (
          <tr className="table-row" key={id}>
            <td>
              <img
                className="employee-image"
                src={image}
                alt="Employee image"
              />
            </td>
            <td className="employee-text">{name}</td>
            {isDesktop ? (
              <>
                <td className="employee-text">{job}</td>
                <td className="employee-text">{admissionDate}</td>
                <td className="employee-text">{phone}</td>
              </>
            ) : (
              <td>
                <img
                  onClick={() => handleEmployeeDetailsId(id)}
                  className="arrow"
                  src={employeeDetailsId[id] ? ArrowUp : ArrowDown}
                  alt="Arrow"
                />
              </td>
            )}

            {/* {employeeDetailsId[id] && (
              <td>
                <div>
                  <span>Cargo</span>
                  <span>{job}</span>
                </div>
                <div>
                  <span>Data de admissão</span>
                  <span>{admissionDate}</span>
                </div>
                <div>
                  <span>Telefone</span>
                  <span>{phone}</span>
                </div>
              </td>
            )} */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
