import { IEmployee } from "../interfaces/IEmployee";
import { formatDate } from "./formatDate";
import { formatPhoneNumber } from "./formatPhoneNumber";

const API_URL = "http://localhost:3001";

type EmployeeFromApi = {
  id: number;
  name: string;
  job: string;
  admissionDate: string;
  phone: string;
  image: string;
};

const EmployeeFactory = (employees: EmployeeFromApi[]): IEmployee[] => {
  return employees.map((employee) => ({
    id: employee.id,
    name: employee.name,
    job: employee.job,
    admissionDate: formatDate(employee.admissionDate),
    phone: formatPhoneNumber(employee.phone),
    image: employee.image,
  }));
};

export async function getEmployees(): Promise<IEmployee[]> {
  return fetch(API_URL + "/employees")
    .then((res) => res.json())
    .then((employees: EmployeeFromApi[]) => EmployeeFactory(employees));
}
