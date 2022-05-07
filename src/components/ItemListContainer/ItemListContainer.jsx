import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'

const ItemListContainer = ({greeting,products,productsCounter}) => {
    // const {greeting, products, productsCounter} = props (Método anterior, no se veía el total counter en el HTML)
  return (
  <div>
      <h1>{greeting}</h1>
      <h2>{products}</h2>
      <ItemCounter productsCounter={productsCounter} initialValue={1} stock={13}/>
      </div>
  )
}

export default ItemListContainer