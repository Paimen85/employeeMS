import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/employees";

class EmployeeService {
  listEmployees() {
    return axios.get(REST_API_BASE_URL);
  }

  createEmployee(employee) {
    return axios.post(REST_API_BASE_URL, employee);
  }

  getEmployeeById(id) {
    return axios.get(REST_API_BASE_URL + "/" + id);
  }

  updateEmployee(id, employee) {
    return axios.put(REST_API_BASE_URL + "/" + id, employee);
  }
}

export default new EmployeeService();
