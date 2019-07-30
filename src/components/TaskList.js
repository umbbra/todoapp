import React from 'react';
import Task from './Task';

const TaskList = () => {
  return ( 
    <div>
      <h3>Lista tasków</h3>
      <Task />
      <Task />
      <Task />
    </div>
   );
}
 
export default TaskList;