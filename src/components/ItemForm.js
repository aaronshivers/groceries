import React, { Component } from 'react'

export default class ItemForm extends Component {
  state = {
    error: ''
  }

  render() {
    return (
      <form className="form" onSubmit={ this.onSubmit }>
        {
          this.state.error && <p className="form__error">{ this.state.error }</p>
        }
      </form>
    )
  }
}