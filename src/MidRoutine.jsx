import React from "react";
import { useState } from "react";
import MidData from "./MidData";

const MidRoutine = () => {
  const [check, setcheck] = useState(0);

  console.log(MidData);
  const Btn1 = () => {
    console.log("Btn1");
    return (
      <>
        <div>
          <br />
          <h2 className="text-center text-capitalize">Clickd on Btn 1</h2>
        </div>
      </>
    );
  };

  const Btn2 = () => {
    console.log("Btn2");
    return (
      <>
        <div>
          <br />
          <h2 className="text-center text-capitalize">Clickd on Btn 2</h2>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="mid_container">
        <table className='table table-striped box__shadow text-center table-responsive'>
          <tr className='border-darken-5'>
            <th>Exam Name </th>
            <th>Date</th>
            <th>Time</th>
          </tr>

          {MidData.map((val, index) => {
            return (
              <>
                <tr className='border-1'>
                  <td>{val.name}</td>
                  <td>{val.date}</td>
                  <td>{val.time}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default MidRoutine;
