"use strict";

console.log("This is from app.js!");

var list = ["Name", "Email", "Phone"];

var showList = function showList(l) {
    var accum = document.getElementById("list");
    list.forEach(function (ele) {
        var li = document.createElement("li");
        li.innerText = ele;
        accum.appendChild(li);
    });
    return accum;
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Hellow hi"
    ),
    React.createElement("ol", { id: "list" }),
    showList(list)
);

var root = document.getElementById("root");
ReactDOM.render(template, root);
