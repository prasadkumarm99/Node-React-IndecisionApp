"use strict";

var list = ["Name", "Email", "Phone"];

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "KnowIT Learnings Data"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            list[0]
        ),
        React.createElement(
            "li",
            null,
            list[1]
        ),
        React.createElement(
            "li",
            null,
            list[2]
        )
    )
);

var root = document.getElementById("root");
ReactDOM.render(template, root);
