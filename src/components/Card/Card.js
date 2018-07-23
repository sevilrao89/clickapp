import React from "react";

export const Card = (props) => (
  <div onClick={props.onClick} > <img className="dogs" src={props.imgSrc}/> </div>
  
);