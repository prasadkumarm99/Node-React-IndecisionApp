const list = ["Name", "Email", "Phone"]

const template = 
    <div>
        <h1>KnowIT Learnings Data</h1>
        <ol>
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
        </ol>
    </div>

var root = document.getElementById("root")
ReactDOM.render(template, root)