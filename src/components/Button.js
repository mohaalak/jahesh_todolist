import React from "react";
import "./Button.css"

export  const Button = (props) => <button className="my-button" {...props}>{props.children}</button>
