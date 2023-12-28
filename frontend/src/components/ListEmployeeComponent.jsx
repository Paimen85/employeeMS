import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {

    const navigate = useNavigate();

    const [employees, setEmployees] = useState([])

    useEffect( () => {
        loadListEmployees()
    }, [])

    const loadListEmployees = async () => {
      await EmployeeService.listEmployees()
        .then(res => setEmployees(res.data))
        .catch(error => console.error(error))
    }

    const addNewEmployee = () => {
      navigate('/add-employee')
    }
    
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-5">List of Employees</h2>
      <button type="button" className="btn btn-primary" onClick={addNewEmployee}>Add employee</button>
      <table className="table table-hover table-bordered mt-2">
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
