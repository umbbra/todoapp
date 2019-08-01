import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = props => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);
  
  // done.sort((a,b) => b.finishDate - a.finishDate);
  if(done.length>-2){
    done.sort((a,b)=>{
      if(a.finishDate < b.finishDate){
        return 1
      }
      if(a.finishDate > b.finishDate){
        return -1
      }
      return 0
    })
 }

 if(active.length >= 2){
   active.sort((a,b) => {
     a = a.text.toLowerCase();
     b = b.text.toLowerCase();
      if(a < b) return -1;
      if(a > b) return 1;
      return 0
    
   })
 }

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);

  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} />);

  return ( 
    <>
    <div className="active">
      <h2>You have to do... </h2>
      {activeTasks.length > 0 ? activeTasks : <span className="info">You don't have things to do!</span>}
    </div>

    <hr/>

    <div className="done">
    <h3>The task, which you have done <em>( {done.length} )</em> </h3>
    {doneTasks.length > 1 && <span className="info">We display max. 5 tasks.</span> }
    {doneTasks.slice(0, 3)}
    
  </div>
  </>
   );
}
 
export default TaskList;