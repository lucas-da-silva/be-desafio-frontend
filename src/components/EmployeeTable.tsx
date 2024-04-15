import { useEffect, useState } from "react";
import { EmployeeTableRow } from "./EmployeeTableRow";
import { MobileEmployeeTableRow } from "./MobileEmployeeTableRow";
import { IEmployee } from "../interfaces/IEmployee";
import "./EmployeeTable.css";

type TableProps = {
  employees: IEmployee[];
};

const DESKTOP_MIN_WIDTH = 650;

export function EmployeeTable({ employees }: TableProps) {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > DESKTOP_MIN_WIDTH
  );
  const [employeeDetails, setEmployeeDetails] = useState<{
    [id: string]: number;
  }>({});

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > DESKTOP_MIN_WIDTH);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleEmployeeDetails = (id: number) => {
    if (employeeDetails[id]) {
      setEmployeeDetails((prevState) => {
        delete prevState[id];
        return { ...prevState };
      });
    } else {
      setEmployeeDetails((prevState) => ({ ...prevState, [id]: id }));
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
        {employees.map(({ id, name, image, job, admissionDate, phone }) => {
          if (isDesktop) {
            return (
              <EmployeeTableRow
                key={id}
                id={id}
                image={image}
                name={name}
                job={job}
                admissionDate={admissionDate}
                phone={phone}
              />
            );
          }

          return (
            <MobileEmployeeTableRow
              key={id}
              id={id}
              image={image}
              name={name}
              job={job}
              admissionDate={admissionDate}
              phone={phone}
              isDetailsOpen={!!employeeDetails[id]}
              handleEmployeeDetails={handleEmployeeDetails}
            />
          );
        })}
      </tbody>
    </table>
  );
}
