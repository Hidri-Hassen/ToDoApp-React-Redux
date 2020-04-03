import React, { Component } from 'react'
import ToDoList from './components/toDoList.js'
import AddTodo from './components/addToDo.js'
import './components/ListItems.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash,faEdit)



class App extends Component {
  state={}
  
      render() {
          return (
  <div className="App">
  <AddTodo/>
  <ToDoList/>
  </div>
  
  )
  }
  
  }
export default App;
