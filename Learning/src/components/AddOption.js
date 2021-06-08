import React from "react"

export default class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.add = this.add.bind(this)
  }
  add(e) {
    if (e.keyCode == undefined) {
      const option = document.getElementById("option").value
      this.props.addOption(option)
      document.getElementById("option").value = ""
    }
    else if (e.keyCode == 13) {
      const option = document.getElementById("option").value
      this.props.addOption(option)
      document.getElementById("option").value = ""
    }
  }
  render() {
    return (
      <div>
        <input
          id="option"
          type="text"
          onKeyUp={this.add}
        ></input>
        <button onClick={this.add}>Add Option</button>
      </div>
    )
  }
}