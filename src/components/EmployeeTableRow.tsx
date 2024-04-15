import { IEmployee } from "../interfaces/IEmployee";

export function EmployeeTableRow({
  image,
  name,
  job,
  admissionDate,
  phone,
}: IEmployee) {
  return (
    <tr className="table-row">
      <td>
        <img className="employee-image" src={image} alt="Employee image" />
      </td>
      <td className="employee-text">{name}</td>
      <td className="employee-text">{job}</td>
      <td className="employee-text">{admissionDate}</td>
      <td className="employee-text">{phone}</td>
    </tr>
  );
}
