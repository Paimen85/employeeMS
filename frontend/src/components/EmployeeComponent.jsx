import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeeComponent = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirstName = (e) => {
    setEmployee({
      ...employee,
      firstName: e.target.value,
    });
  };

  const handleLastName = (e) => {
    setEmployee({
      ...employee,
      lastName: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setEmployee({
      ...employee,
      email: e.target.value,
    });
  };

  const handleCancelClick = () => {
    navigate("/");
  };

  const saveEmployee = async (e) => {
    e.preventDefault();
    await EmployeeService.createEmployee(employee)
      .then((res) => {
        navigate("/employees");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="card mt-5">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form onSubmit={(e) => saveEmployee(e)}>
              <div className="form-group mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter first name"
                  value={employee.firstName}
                  onChange={(e) => handleFirstName(e)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter last name"
                  value={employee.lastName}
                  onChange={(e) => handleLastName(e)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={employee.email}
                  onChange={(e) => handleEmail(e)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-success"
              >
                Create
              </button>
              <button
                type="button"
                className="btn btn-warning mx-3"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
