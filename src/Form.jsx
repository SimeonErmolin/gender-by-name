import React from 'react'
import Input  from './Input'
import Button from './Button'
import Deduction from './Deduction'
import requestGenderByName from './network'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {infoUser: ''};
    this.findInfoUser = this.findInfoUser.bind(this);
  }

  async findInfoUser(e) {
    e.preventDefault();

    const inputName = document.querySelector(".input");

    if (inputName.value == "") return;

    const information = await requestGenderByName(inputName.value);

    this.setState({
      infoUser: `${information.name} is ${information.gender}`
    });

    document.querySelector('.form').reset();
  }

  render() {
    return (
      <form className="form" onSubmit={this.findInfoUser}>
        <Input />
        <Button />
        <Deduction infoUser={this.state.infoUser} />
      </form>
    )
  }
}
