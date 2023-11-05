import React from "react";

const DropdownMenu = ({first,second}) => {
  return (
    <div className="dropdown-menu">
      <ul>
		
        <li>{first}</li>
        <li>{second}</li>
        
      </ul>
    </div>
  );
};

export default DropdownMenu;