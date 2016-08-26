import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TodoBanner from './components/TodoBanner'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  constructor(props){
    super();
    this.updateItems = this.updateItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {items: ['Eat', 'Sleep', 'Pee']}
   }
   updateItems(newItem){
     var allItems = this.state.items.concat(newItem);
     this.setState({items: allItems});
   }
   deleteItem(index){
     var newArr = this.state.items
     newArr.splice(index,1)
     this.setState({items: newArr})
   }
  render() {
    return (<div className='container'>
              <TodoBanner />
              {/*sent a property of items to TodoList component*/}
              <TodoList items={this.state.items} onDeleteItem={this.deleteItem}/>
              <TodoForm onFormSubmit={this.updateItems} />
            </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
/*
STRUCTURE
TODOAPP
-- TODOBANNER
-- TODOLIST
-- TODOFORM


REMEMBER TO BIND FUNCTION!!!!!!
*/
