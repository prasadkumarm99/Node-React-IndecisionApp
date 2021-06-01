console.log("This is from app.js!")

const list = ["Name", "Email", "Phone"]

const showList = function(l)
{
    let accum = document.getElementById("list")
    list.forEach((ele) => {
        let li = document.createElement("li")
        li.innerText = ele
        accum.appendChild(li);
    })
    return accum
}

const template = 
    <div>
        <h1>Hellow hi</h1>
        <ol id = "list"></ol>
        {showList(list)}
    </div>

var root = document.getElementById("root")
ReactDOM.render(template, root)