import React from 'react'

export default class Warning extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.warn) return null;
    return (
        <p className="result warning">Слишком короткое имя!</p>
    )
  }
}
