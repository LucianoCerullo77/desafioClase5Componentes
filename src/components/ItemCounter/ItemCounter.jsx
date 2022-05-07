import React, {useState} from 'react'

function ItemCounter ({initialValue, stock}) {
//UseState se usa siempre con CONST**
  const [amount, setAmount] = useState(initialValue)

  const addUpp = () => {
    if(amount < stock){
      setAmount(amount + 1)
    }
    else {
      alert("No puedes comprar más de 7 unidades");
    }
  }
  
  const substract = () => {
    if (amount > 0) {
    setAmount(amount - 1)
    console.log("restar");
  }
}

  return (
    <div>
      <h3>Whey Protein Isolate</h3>
      <img src="https://http2.mlstatic.com/D_NQ_NP_979511-MLA31009661542_062019-O.webp" style={{width:'10rem'}}></img>
      <br/>
        <button onClick={substract}>-</button>
        <span>{amount} Unidades</span>
        <button onClick={addUpp}>+</button>
    </div>
  )
}

export default ItemCounter