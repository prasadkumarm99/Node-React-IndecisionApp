import React from "react"
import Option from "./Option"

const Options = (props) => {
  return (
    <div>
    <button onClick={props.removeAll}>Remove All</button>
    {
      props.options.map((option) => (
        <Option 
          key={option} 
          removeOption={props.removeOption}
          option={option}
        />
      ))
    }
    </div>
  )
}

export default Options