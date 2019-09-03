import React from 'react';
import {Input} from "./Input";
import {Button} from "./Button"

export class OneForm extends React.Component {  
  state = {
    value: ''
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.value)
    this.setState({value :''})
  }

  handleChange=(event) => {
    this.setState({value: event.target.value});
  }


  render() {
    const {placeholder} = this.props;
    const {value} =this.state;
    return (
    <form onSubmit={this.handleSubmit}>
      <Input placeholder={placeholder} value={value} onChange={this.handleChange}/>
      <Button>Submit</Button>
    </form>)
  }
}


