import React from 'react';

const Task = props => {
  const style = { color: 'red' };

  const { id, text, date, active, important, finishDate} = props.task;
  if(active){
  return ( 
    <div>
      <p>
      <strong style={important ? style : null}>{text}</strong> - do <span>{date} </span>
      <button onClick={() => props.change(id)}> Zrobione!</button>
      <button onClick={() => props.delete(id)}>X</button>
      </p>
    </div>
   );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
      <p>
      <strong>{text}</strong> -  <em>zrealizowane w dniu: {finish} </em>
      <button onClick={() => props.delete(id)}>X</button>
      </p>
    </div>
    )
  }
}
 
export default Task;