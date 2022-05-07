import React, { useState } from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'

const ItemListContainer = ({greeting,products}) => {
  const [show,setShow] = useState (false)
    // const {greeting, products, productsCounter} = props (Método anterior, no se veía el total counter en el HTML)

    const seeMore = () => {
      setShow (!show)
      console.log(show);
    }


  return (
  <div>
      <h1>{greeting}</h1>
      <h2>{products}</h2>
      <ItemCounter initialValue={1} stock={7}/>
      <br></br>
      {show ? <span>Categories: Fitness, Gym. <br/>
      Tags: Health, Weight. <br/>
      This product contains:
      <br/>1293 mg alanine, 634 mg arginine, 2513 mg aspartic acid, 536 mg cysteine, 4241 mg glutamic acid, etc.<br/></span> : ''}
      <button onClick={seeMore}>{show ? 'See Less Details' : 'See More Details'}</button>
      </div>
  )
}

export default ItemListContainer