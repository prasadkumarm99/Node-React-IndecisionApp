import React from "react"

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.onPick}
        disabled={!props.status}
      >
        What should I pick
      </button>
    </div>
  )
}

export default Action