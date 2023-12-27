import React from "react";

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "Evgeny",
      lastName: "Baranov",
      email: "evgeny@gamil.com",
    },
    {
      id: 2,
      firstName: "Leo",
      lastName: "Baranov",
      email: "leo@gamil.com",
    },
    {
      id: 3,
      firstName: "Lilja",
      lastName: "Baranova",
      email: "lilja@gamil.com",
    },
  ];
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
          {dummyData.map((employee,index) => 
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
