import React from "react";
import { useState } from "react";
import FinalData from "./FinalData";
const FinalRoutine = () => {
  return (
    <>
      <div className="mid_container">
        <table className='table table-striped box__shadow text-center table-responsive'>
          <tr className='border-darken-5'>
            <th>Exam Name </th>
            <th>Date</th>
            <th>Time</th>
          </tr>

          {
            FinalData.map((val, index) => {
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

export default FinalRoutine;
