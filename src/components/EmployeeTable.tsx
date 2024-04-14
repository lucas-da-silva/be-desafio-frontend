import { IEmployee } from "../interfaces/IEmployee";
import { formatDate, formatPhoneNumber } from "../services";
import "./Table.css";

type TableProps = {
  employees: IEmployee[];
};

export function EmployeeTable({ employees }: TableProps) {
  return (
    <table id="employee-table">
      <thead className="table-header">
        <tr>
          <th>FOTO</th>
          <th>NOME</th>
          <th>CARGO</th>
          <th>DATA DE ADMISSÃO</th>
          <th>TELEFONE</th>
        </tr>
      </thead>

      <tbody className="table-body">
        {employees.map((employee) => (
          <tr className="table-row" key={employee.id}>
            <td>
              <img
                className="employee-image"
                src={employee.image}
                alt="Employee image"
              />
            </td>
            <td className="employee-text">{employee.name}</td>
            <td className="employee-text">{employee.job}</td>
            <td className="employee-text">
              {formatDate(employee.admission_date)}
            </td>
            <td className="employee-text">
              {formatPhoneNumber(employee.phone)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
