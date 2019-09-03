import React from "react";
import "./Button.css"

export function Button(props) {
  return <button className="my-button" {...props}>{props.children}</button>
}