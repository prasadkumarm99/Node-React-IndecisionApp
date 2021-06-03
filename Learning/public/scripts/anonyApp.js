"use strict";

var count = 0;
var list = [];

var add = function add() {
  var text = document.getElementById("item").value;
  if (text.length != 0) {
    list.push(text);
  } else {
    alert("Please fill the empty field.");
  }
  count = list.length;
  document.getElementById("item").value = "";
  render();
};

var onEnter = function onEnter(e) {
  if (e.keyCode == 13) {
    add();
  }
};

var pick = function pick() {
  var picker = Math.round(Math.random() * (count - 1));
  alert("You have got " + list[picker]);
};

var reset = function reset() {
  count = 0;
  list = [];
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "The listing app"
    ),
    React.createElement(
      "h3",
      null,
      count != 0 ? "The number of elements are: " + count : "No elements"
    ),
    React.createElement(
      "ol",
      null,
      list.map(function (element) {
        var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var temp = c;
        c++;
        return React.createElement(
          "li",
          { key: temp },
          element
        );
      })
    ),
    React.createElement("input", { type: "text", id: "item", onKeyUp: onEnter }),
    React.createElement(
      "button",
      { onClick: add },
      "Add "
    ),
    React.createElement(
      "button",
      { disabled: list.length > 0 ? false : true, onClick: reset },
      "Reset"
    ),
    React.createElement("br", null),
    React.createElement(
      "button",
      { disabled: list.length >= 2 ? false : true, onClick: pick },
      "Pick Item"
    )
  );

  ReactDOM.render(template, document.getElementById("root"));
};
render();
