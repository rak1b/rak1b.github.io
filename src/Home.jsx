import React from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import MidRoutine from "./MidRoutine";
import Routine from "./Routine";
import FinalData from "./FinalData";
import FinalRoutine from "./FinalRoutine";

const home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="my_nav box__shadow ">
        
        <div className='nav_brand'>
            <a>Routines For G</a>
        </div>

          <div className="mynav_links ">

            {/* <NavLink activeClassName='active' to="/">Home</NavLink> */}
            <NavLink activeClassName='active_class' exact to="/">Class Routine</NavLink>
            <NavLink activeClassName='active_class' exact to="/mid_xm_routine">Mid Exam Routine</NavLink>
            <NavLink activeClassName='active_class' exact to="/final_exam_routine">Final Exam Routine</NavLink>
          </div>
        </div>
      </div>

      <Switch>
        {/* <Route exact path="/" /> */}
        <Route exact path="/final_exam_routine" component={FinalRoutine}/>
        <Route exact path="/" component={Routine} />
        <Route exact path="/mid_xm_routine" component={MidRoutine} />
        
      </Switch>
    </>
  );
};

export default home;
