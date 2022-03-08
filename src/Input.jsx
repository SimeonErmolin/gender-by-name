import React from 'react'

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onValueChange(e.target.value)
  }

  render() {
    return (
      <input type="text" placeholder="Введи имя и узнай гендер" className="input" value={this.props.value} onChange={this.handleChange} />
    )
  }
}
