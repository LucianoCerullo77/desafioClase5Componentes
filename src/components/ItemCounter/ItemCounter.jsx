import React, {useState} from 'react'
import { toast } from "react-toastify"

function ItemCounter ({initialValue, stock}) {
//UseState se usa siempre con CONST**
  const [amount, setAmount] = useState(initialValue)

  const addUpp = () => {
    if(amount < stock){
      setAmount(amount + 1)
    }
    else {
      alert("You cannot buy more than 7 Units");
    }
  }
  
  const substract = () => {
    if (amount > 0) {
    setAmount(amount - 1)
  }
}

const addOnCart = () => {
  toast.info(`${amount} Products added on cart`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}



  return (
    <div>
      <h3>Whey Protein Isolate</h3>
      <img src="https://http2.mlstatic.com/D_NQ_NP_979511-MLA31009661542_062019-O.webp" style={{width:'10rem'}}></img>
      <br/>
        <button onClick={substract}>-</button>
        <span>{amount} Unidades</span>
        <button onClick={addUpp}>+</button>
        <br/>
        <button onClick={addOnCart}>Add on Cart</button>
    </div>
  )
}

export default ItemCounter