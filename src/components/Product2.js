import React from 'react'

export default function Product2(props) {
  return (
    <>
    <div className="row eachrow">
        
        <span className="col-9 containerCreatedIssue">{props.index+13}. {props.product.name}</span>
        <span class="badge bg-danger pricebutton2 col-1 buttons">₹{props.product.price}</span>
        <div
          class="btn-group col-1 buttons"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger" onClick={()=>{props.decrement2(props.index)}}>
            -
          </button>
          <button type="button" class="btn btn-light">
            {props.product.quantity}
          </button>
          <button type="button" class="btn btn-danger" onClick={()=>{props.increment2(props.index)}}>
            +
          </button>
        </div>
        <span className="col-1 priceItem"> ₹{props.product.price*props.product.quantity}</span>
    </div>
    </>
  )
}
