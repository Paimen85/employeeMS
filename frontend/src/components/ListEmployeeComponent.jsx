import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        listEmployees()
        .then(res => setEmployees(res.data))
        .catch(error => console.error(error))
    }, [])

    
  return (
    <div className="container">
      <h2 className="text-center mt-5">List of Employees</h2>
      <table className="table table-hover table-bordered mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee,index) => 
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
