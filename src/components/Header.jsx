import React, { useState } from "react";
import { members } from "./Members";

const Header = ({ selectTeam, count }) => {
  return (
    <div>
      <h2>
        Total number of members in {selectTeam} : {count}
      </h2>
    </div>
  );
};

export default Header;
