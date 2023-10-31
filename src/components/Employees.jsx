import React, { useState } from "react";
import femaleProfile from "../assets/img/femaleProfile.jpg";
import maleProfile from "../assets/img/maleProfile.jpg";
const Employees = ({
  employees,
  selectTeam,
  handleTeamSelection,
  handleEmployeeCardClick,
}) => {
  const style = {
    cursor: "pointer",
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
              <div
                key={employee.id}
                className={
                  employee.teamName === selectTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={style}
                onClick={() => {
                  handleEmployeeCardClick(employee.id);
                }}
              >
                <img
                  src={employee.gender === "male" ? maleProfile : femaleProfile}
                  className="card-img-top"
                  alt="No Image"
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
