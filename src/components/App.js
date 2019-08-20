import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {

  counter = 2;
  state = {
    tasks: [
      {
        id:0,
        text: "example with priority",
        date: '2019-08-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id:1,
        text: "example number 1",
        date: '2019-08-15',
        important: false,
        active: true,
        finishDate: null
      },
    ]
  }

  deleteTask = (id) => {
   let tasks = [...this.state.tasks];

   let newTasks = tasks.filter(el => el.id !== id);
   this.setState({
    tasks : newTasks
   })
  }

  changeTaskStatus = (id) =>{
    
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks,
    })
  }

  addTask = (text, date, important) =>{
    const task = {
        id:this.counter,
        text,
        date,
        important,
        active: true,
        finishDate: null
    }
    this.counter++;

    this.setState((prev)=>({
      tasks: [...prev.tasks, task],
    }))

    return true
  }

  render(){
    return (
      <div className="App">
      <div className="logo">
      <p>TO DO APP </p>
      <p>You can do it!!!</p>
      <hr />
      </div>
      <AddTask addTask={this.addTask}/>
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
