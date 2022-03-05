import React from 'react'

export default class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <p className="result">{this.props.infoUser}</p>
    )
  }
}
