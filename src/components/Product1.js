import React from "react";

export default function Product1(props) {
  return (
    <>
      <div className="row eachrow">
        <span className="col-9 containerCreatedIssue">{props.index+1}.{props.product.name}</span>
        <span class="badge bg-danger pricebutton col-1 buttons">
     ₹{props.product.price}
        </span>
        <div
          class="btn-group col-1 buttons"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger" onClick={()=>{props.decrement(props.index)}}>
            -
          </button>
          <button type="button" class="btn btn-light">
            {props.product.quantity}
          </button>
          <button type="button" class="btn btn-danger" onClick={()=>props.increment(props.index)}>
            +
          </button>
        </div>
        <span className="col-1 priceItem"> ₹{props.product.price*props.product.quantity}</span>
      </div>
    </>
  );
}
