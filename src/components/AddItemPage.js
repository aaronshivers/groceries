import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemForm from './ItemForm'
import { startAddItem } from '../actions/groceries'

class AddItemPage extends Component {

  render() {
    return (
      <div className="page-header">
        <div className="content=container">
          <h1 className="page-header__title">Add Item</h1>
        </div>
        <div className="content-container">
          <ItemForm onSubmit={ this.onSubmit } />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startAddItem: item => dispatch(startAddItem(item))
})

export default connect(undefined, mapDispatchToProps)(AddItemPage)
