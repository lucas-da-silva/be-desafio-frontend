import ArrowDown from "../assets/arrow-down.svg";
import ArrowUp from "../assets/arrow-up.svg";
import { IEmployee } from "../interfaces/IEmployee";
import "./MobileEmployeeTableRow.css";

interface MobileEmployeeTableRowProps extends IEmployee {
  isDetailsOpen: boolean;
  handleEmployeeDetails: (id: number) => void;
}

export function MobileEmployeeTableRow({
  id,
  image,
  name,
  job,
  admissionDate,
  phone,
  isDetailsOpen,
  handleEmployeeDetails,
}: MobileEmployeeTableRowProps) {
  return (
    <>
      <tr className="table-row" id="mobile-table-row">
        <td>
          <img className="employee-image" src={image} alt="Employee image" />
        </td>
        <td className="employee-text">{name}</td>
        <td>
          <img
            onClick={() => handleEmployeeDetails(id)}
            className="arrow"
            src={isDetailsOpen ? ArrowUp : ArrowDown}
            alt="Arrow"
          />
        </td>
      </tr>
      {isDetailsOpen && (
        <tr>
          <td className="details-row" colSpan={3}>
            <div>
              <span className="details-category">Cargo</span>
              <span className="details-value">{job}</span>
            </div>
            <div>
              <span className="details-category">Data de admissão</span>
              <span className="details-value">{admissionDate}</span>
            </div>
            <div>
              <span className="details-category">Telefone</span>
              <span className="details-value">{phone}</span>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
