import React from 'react'
import { connect } from 'react-redux'
import GroceryListItem from './GroceryListItem'
// import selectGroceries from '../selectors/groceries'

const GroceryList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Groceries</div>
    </div>
    <div className="list-body">
      {
        0 === 0 ? (
        // props.groceries.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Groceries</span>
          </div>
        ) : (
          props.groceries.map(item => (
            <GroceryListItem key={ item.id } { ...item } />
          ))
        )
      }
    </div>
  </div>
)

// const mapStateToProps = state => ({
//   groceries: selectGroceries(state.groceries)
// })

export default GroceryList
// export default connect(mapStateToProps)(GroceryList)
