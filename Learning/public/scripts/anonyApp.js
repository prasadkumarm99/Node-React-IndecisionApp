"use strict";

// Control statements in JSX

var details1 = {
  name: "Raju",
  email: "example@gmail.com",
  phone: 9876543210
};

var details2 = {
  name: null,
  email: null,
  phone: 9876543210
};
var namer = function namer(details) {
  if (details.name) {
    return details.name;
  } else {
    return "Unknown";
  }
};

var template1 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "KnowIT Learnings Details Template 1"
  ),
  React.createElement(
    "p",
    null,
    "Name: ",
    namer(details1)
  ),
  React.createElement(
    "p",
    null,
    "Email: ",
    details1.email ? details1.email : "Unknown"
  ),
  React.createElement(
    "p",
    null,
    "Phone: ",
    details1.phone
  )
);

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "KnowIT Learnings Details Template 2"
  ),
  React.createElement(
    "p",
    null,
    "Name: ",
    namer(details2)
  ),
  React.createElement(
    "p",
    null,
    "Email: ",
    details2.email ? details2.email : "Unknown"
  ),
  React.createElement(
    "p",
    null,
    "Phone: ",
    details2.phone
  )
);

ReactDOM.render(template1, document.getElementById("root"));
ReactDOM.render(template2, document.getElementById("sub"));
