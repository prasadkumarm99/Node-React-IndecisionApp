let list = ["Fist", "Second"]

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Welcome to task picker</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I pick</button>
      </div>
    )
  }
}

class List extends React.Component {
  render() {
    let c = 0
    return (
      <div>
        <ol>
          {
            list.map((option) => 
            {
              c++ 
              return <li key={c}>{option}</li>})
          }
        </ol>
      </div>
    )
  }
}

class AddItem extends React.Component {
  render() {
    return (
      <div>
        <button>Add Item</button>
      </div>
    )
  }
}

const template = 
  <div>
    <Header/>
    <Action/>
    <List/>
    <AddItem/>
  </div>

ReactDOM.render(template, document.getElementById("root"))