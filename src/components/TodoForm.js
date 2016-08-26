import React, { Component } from 'react'

class TodoForm extends Component {
  constructor(props){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ''
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    if(this.state.value !== '') this.props.onFormSubmit(this.state.value)
    this.setState({value: ''})
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Add a Task' id='item'/>
          <input type='submit' value='Add'/>
      </form>
    )
  }
}
export default TodoForm
