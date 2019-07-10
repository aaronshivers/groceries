import React from 'react'
import { Link } from 'react-router-dom'

const GroceryListItem = ({ id, description, amount }) => (
  <Link className="list-item" to={ `/edit/${ id }` }>
    <div>
      <h3 className="list-item__title">{ description }</h3>
    </div>
    <h3 className="list-item__data">{ amount }</h3>
  </Link>
)

export default GroceryListItem
