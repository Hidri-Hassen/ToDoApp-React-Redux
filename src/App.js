import React, { Component } from 'react'
import Input from './components/input.js'
import List from './components/list.js'
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
  <Input/>
  <List/>
  </div>
  
  )
  }
  
  }
export default App;
