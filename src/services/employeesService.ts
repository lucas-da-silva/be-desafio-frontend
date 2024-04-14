import { IEmployee } from "../interfaces/IEmployee";

const API_URL = "http://localhost:3001";

export async function getEmployees(): Promise<IEmployee[]> {
  return fetch(API_URL + "/employees").then((res) => res.json());
}
