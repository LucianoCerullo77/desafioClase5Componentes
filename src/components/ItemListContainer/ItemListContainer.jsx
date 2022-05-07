import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'

const ItemListContainer = (props) => {
    const {greeting, products, productsCounter} = props
  return (
  <div>
      <h1>{greeting}</h1>
      <h2>{products}</h2>
      <ItemCounter ItemCounter={productsCounter}/>
      </div>
  )
}

export default ItemListContainer