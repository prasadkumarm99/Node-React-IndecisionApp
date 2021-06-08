import React from "react"
import Header from "./Header"
import Action from "./Action"
import Options from "./Options"
import AddOption from "./AddOption"

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.onPick = this.onPick.bind(this)
    this.removeAll = this.removeAll.bind(this)
    this.addOption = this.addOption.bind(this)
    this.removeOption = this.removeOption.bind(this)
    this.state = {
      options: props.options
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options")
    const options = JSON.parse(json)
    if (options) {
      this.setState(() => ({ options }))
    }
  } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem("options", json)
    }
  }
  onPick() {
    const index = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[index])
  }
  removeAll() {
    this.setState(() => ({options: []}))
  }
  removeOption(item) {
    this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          return option !== item
        })
      }))
  }
  addOption(option) {
    if (option) {
      this.setState((prevState) => {
        if (prevState.options.indexOf(option) == -1) {
            return {
              options: prevState.options.concat(option)
            }
        }
        else {
          alert("Option is already exists.")
        }
      })
    }
    else {
      alert("Please fill the empty field.")
    }
  }
  render() {
    const title = "Indecision App"
    const subtitle = "Welcome to decision maker."
    return (
      <div>
        <Header 
          title={title} 
          subtitle={subtitle} 
        />
        <Action 
          onPick={this.onPick}
          status={this.state.options.length >= 2}
        />
        <Options 
          options={this.state.options} 
          removeAll={this.removeAll}
          removeOption={this.removeOption}
        />
        <AddOption addOption={this.addOption}/>
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: ["First Option", "Second Option"]
}