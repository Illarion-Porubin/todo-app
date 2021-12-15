import React, {Component} from "react";

import TaskInput from "./components/taskInput/taskInput";
import TaskList from "./components/taskList/taskList";
import Board from "./components/board/board"


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id:"1", title: "Задача", done: false},
        {id:"1", title: "Задача", done: false},
        {id:"1", title: "Задача", done: false},
      ]
    }
    this.maxId = this.state.data.length;  
  }
  

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id),
        // id: this.maxId -1,
      }
    })
  }

  doneTasks = done => {
    this.setState({ 
        done : done.target.checked
    })
  }
  

  addTask = (title) => {
    const newItem = {
      title,
      done: false,
      id: this.maxId++,
    }
    console.log('Object.keys(this.state.data', this.state.data.length)
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }


  render(){
    return (
      <div className="App">
          <div className="wrapper">
            <div className="to-do">
              <h1 className="to-do__title">todos</h1>
              <div className="to-do__block">
                <TaskInput 
                onAdd={this.addTask}
                />
                <TaskList 
                data={this.state.data}
                doneTask={this.doneTasks}
                onDelete={this.deleteItem}
                />
                <Board/>  
              </div>
            </div>   
          </div>
      </div> 
    )
  }
}



export default App;
