import React, {useState} from 'react'

function ItemCounter ({productsCounter, initialValue}) {
//UseState se usa siempre con CONST**
  const [amount, setAmount] = useState(initialValue)

  const addUpp = () => {
    setAmount(amount + 1)
    console.log("sumar");
  }
  
  const substract = () => {
    if (amount > 0) {
    setAmount(amount - 1)
    console.log("restar");
  }
}

  return (
    <div>
        <p>{productsCounter}</p>
        <button onClick={substract}>-</button>
        <span>{amount}</span>
        <button onClick={addUpp}>+</button>
    </div>
  )
}

export default ItemCounter