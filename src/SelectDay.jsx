import { Switch,Route } from 'react-router-dom'

import Sat from './SubCompo/Sat'
import Sun from './SubCompo/Sun'
import Mon from './SubCompo/Mon'
import Tues from './SubCompo/Tues'
import Wed from './SubCompo/Wed'
import Thurs from './SubCompo/Thurs'
import Fri from './SubCompo/Fri'
const SelectDay = () => {
  return (
    <>
      <Switch>
        <Route exact path="/class_routine/Sat" component={Sat} />
        <Route exact path="/class_routine" component={Sun} />
        <Route exact path="/class_routine/Mon" component={Mon} />
        <Route exact path="/class_routine/Wed" component={Wed} />
        <Route exact path="/class_routine/Thurs" component={Thurs} />
        <Route exact path="/class_routine/Tues" component={Tues} />
        <Route exact path="/class_routine/Fri" component={Fri} />
      </Switch>
    </>
  );
};

export default SelectDay