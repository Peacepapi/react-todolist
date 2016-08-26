import React, { Component } from 'react'

class TodoList extends Component {
  constructor(){
    super();
    this.eachItem = this.eachItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  eachItem(item, i){
    return(<li key={i}>
            <span id={i} onClick={this.deleteItem}><i className='fa fa-trash-o'></i></span>
            <p>{item}</p>
           </li>)
  }
  deleteItem(event){
    this.props.onDeleteItem(event.target.id)
  }
  render() {
    return(<ul>{this.props.items.map(this.eachItem)}</ul>)
  }
}

export default TodoList
