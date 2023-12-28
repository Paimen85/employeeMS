import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeeComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({
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

    if (validateForm()) {
      await EmployeeService.createEmployee(employee)
        .then((res) => {
          navigate("/employees");
        })
        .catch((e) => console.log(e));
    }
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };
    if (employee.firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }

    if (employee.lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    if (employee.email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  };

  const pageTitle = () => {
    if (id) {
      return <h2 className="text-center">Edit Employee</h2>;
    } else {
    return <h2 className="text-center">Add Employee</h2>;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card mt-5 col-md-6 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form onSubmit={(e) => saveEmployee(e)}>
              <div className="form-group mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  name="firstName"
                  id="firstName"
                  placeholder="Enter first name"
                  value={employee.firstName}
                  onChange={(e) => handleFirstName(e)}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  name="lastName"
                  id="lastName"
                  placeholder="Enter last name"
                  value={employee.lastName}
                  onChange={(e) => handleLastName(e)}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={employee.email}
                  onChange={(e) => handleEmail(e)}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <button type="submit" className="btn btn-success">
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
