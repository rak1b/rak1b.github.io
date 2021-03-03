import { NavLink, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


import SelectDay from "./SelectDay";
import { useState } from "react";
import Sun from "./SubCompo/Sun";
import Mon from "./SubCompo/Mon";
import Tues from "./SubCompo/Tues";
import Wed from "./SubCompo/Wed";
import Thurs from "./SubCompo/Thurs";
import Fri from "./SubCompo/Fri";
import Sat from "./SubCompo/Sat";

const Routine = () => {
let msg
  useEffect(() => {
    let msg = "Click on Day";
  }, []);

const [check,set_check] = useState(0)
  return (
    <>
      <div className="routine_container box__shadow">
        <div className="routine_header box__shadow">
          i<ArrowForwardIosIcon className='next_icon'/>
          <a onClick={()=>set_check(1)}>
            Sunday
          </a>
          <a onClick={()=>set_check(2)}>
            Monday
          </a>
          <a onClick={()=>set_check(3)}>
            Tuesday
          </a>
          <a onClick={()=>set_check(4)}>
            Wednesday
          </a>
          <a onClick={()=>set_check(5)}>
            Thursday
          </a>
          <a onClick={()=>set_check(6)}>
            Friday
          </a>
          <a onClick={()=>set_check(7)}>
            Saturday
          </a>
        </div>
        <div className="class_container ">
          {check===0?<Sun/>:''}
          {check===1?<Sun/>:''}
          {check===2?<Mon/>:''}
          {check===3?<Tues/>:''}
          {check===4?<Wed/>:''}
          {check===5?<Thurs/>:''}
          {check===6?<Fri/>:''}
          {check===7?<Sat/>:''}

        </div>
      </div>
    </>
  );
};

export default Routine;
