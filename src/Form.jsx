import React from 'react'
import Input from './Input'
import Button from './Button'
import Deduction from './Deduction'
import Warning from './Warning'
import requestGenderByName from './network'

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      infoUser: '',
      warn: false,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.findInfoUser = this.findInfoUser.bind(this);
  }

  handleValueChange(value) {
    console.log(value)
    this.setState({
      value: value
    })
  }

  async findInfoUser(e) {
    e.preventDefault();

    if (this.state.value == "") return;

    if (this.state.value.length <= 2) {
      this.setState({
        warn: true
      })
    } else {
      this.setState({
        warn: false
      })
    }

    const information = await requestGenderByName(this.state.value);

    this.setState({
      infoUser: `${information.name} is ${information.gender}`,
      value: ''
    });
  }

  render() {
    return (
      <form className="form" onSubmit={this.findInfoUser}>
        <Input value={this.state.value} onValueChange={this.handleValueChange} />
        <Button />
        <Deduction infoUser={this.state.infoUser} />
        <Warning warn={this.state.warn} />
      </form>
    )
  }
}
