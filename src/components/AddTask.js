import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {

  minDate = new Date().toISOString().slice(0,10);
  state = { 
    text: "",
    checked: false,
    date: this.minDate,
   }

   handleText = (e) =>{
     this.setState({
       text: e.target.value,
     })
   }

   handleCheckbox = (e) =>{
    this.setState({
      checked: e.target.checked,
    })
  }

  handleDate = (e) =>{
    this.setState({
      date: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const {text, checked, date} = this.state;
    if(text.length>2){
    const add = this.props.addTask(text, date, checked);
    if(add){
      this.setState({
        text: "",
        checked: false,
        date: this.minDate,
      })
    }
  } else {
    alert("Za krótka nazwa")
  }
}

  render() { 
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate+"-12-31";

    return ( 
      <div className="form">
        <div>
          <form>

            <input 
            value={this.state.text} 
            onChange={this.handleText}
            type="text" 
            placeholder="add some task..."/>

            <label htmlFor="important">
            <input 
            onChange={this.handleCheckbox}
            checked={this.state.checked}
            id="important"
            type="checkbox"/> Priorytet
            </label>

            <br/>

            <label htmlFor="date">Do dnia:
            <input 
            onChange={this.handleDate}
            type="date" 
            value={this.state.date} 
            min={this.minDate} 
            max={maxDate} />
            </label>

            <button onClick={this.handleSubmit}>Dodaj zadanie</button>
            </form>
            </div> 
        <hr/>
      </div>
     );
  }
}
 
export default AddTask;