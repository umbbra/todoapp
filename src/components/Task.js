import React from 'react';
import "./Task.css";

const Task = props => {
  const style = { color: '#EB4A4A' };

  const { id, text, date, active, important, finishDate} = props.task;
  if(active){
  return ( 
    <div className="taskToDo">
      <p>
      <strong style={important ? style : null}>{text}</strong> - to <span>{date} </span>
      <button onClick={() => props.change(id)}> Done!</button>
      <button  onClick={() => props.delete(id)}><strong> X</strong></button>
      </p>
    </div>
   );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div className="taskDone">
      <p>
      <strong>{text}</strong> -  <em>completed on: {finish} </em>
      <button onClick={() => props.delete(id)}>X</button>
      </p>
    </div>
    )
  }
}
 
export default Task;