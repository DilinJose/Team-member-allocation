import { useEffect, useState } from "react";
import "../assets/css/style.css";
import Footer from "./Footer";
import Header from "./Header";
import Employees from "./Employees";
import { members } from "./Members";
import { Route, Routes } from "react-router-dom";
function App() {
  const [selectTeam, setSelectTeam] = useState(
    JSON.parse(sessionStorage.getItem("selectTeam")) || "TeamB"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(sessionStorage.getItem("employees") || members)
  );

  useState(() => {
    sessionStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    sessionStorage.setItem("selectTeam", JSON.stringify(selectTeam));
  }, [selectTeam]);

  const handleTeamSelection = (e) => {
    setSelectTeam(e.target.value);
  };

  const handleEmployeeCardClick = (e) => {
    const transformedEmployees = employees.map((employee) =>
      employee.id === e
        ? employee.teamName === selectTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectTeam }
        : employee
    );

    setEmployees(transformedEmployees);
  };

  const count = employees.filter(
    (employee) => employee.teamName === selectTeam
  ).length;

  return (
    <div className="app">
      <Header selectTeam={selectTeam} count={count} />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={employees}
              selectTeam={selectTeam}
              handleTeamSelection={handleTeamSelection}
              handleEmployeeCardClick={handleEmployeeCardClick}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
