import React from "react";
import { MdDensityMedium } from "react-icons/md";
import { IoMdClose } from "react-icons/io";





function ToggleIcon({ active, handleChangeActive }) {
  return (
      <div>
        {active ?
          (<IoMdClose
            onClick={() => handleChangeActive()}
          />)
          :
          (<MdDensityMedium
            onClick={() => handleChangeActive()}
          />)
        }
      </div>
  );
}

export default ToggleIcon;

















