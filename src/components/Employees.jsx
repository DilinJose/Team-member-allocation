import React, { useState } from "react";
import femaleProfile from "../assets/img/femaleProfile.jpg";
import maleProfile from "../assets/img/maleProfile.jpg";
const Employees = () => {
  const style = {
    cursor: "pointer",
  };
  const [selectTeam, setSelectTeam] = useState("TeamB");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);

  const handleTeamSelection = (e) => {
    setSelectTeam(e.target.value
        );
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div>
          <select
            value={selectTeam}
            onChange={(e) => handleTeamSelection(e)}
            className="form-select form-select-lg"
          >
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => (
              <div key={employee.id} className="card m-2" style={style}>
                <img
                  src={employee.gender === "male" ? maleProfile : femaleProfile}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-titlle">
                    Full Name : {employee.fullName}
                  </h5>
                  <p className="card-text">
                    Designation : {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
