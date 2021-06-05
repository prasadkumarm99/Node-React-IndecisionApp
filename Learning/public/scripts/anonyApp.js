"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var list = ["Bath", "Continue working"];

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Indecision"
        ),
        React.createElement(
          "h2",
          null,
          "Welcome to task picker"
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component2) {
  _inherits(Action, _React$Component2);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          null,
          "What should I pick"
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var List = function (_React$Component3) {
  _inherits(List, _React$Component3);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var c = 0;
      return React.createElement(
        "div",
        null,
        React.createElement(
          "ol",
          null,
          list.map(function (option) {
            c++;
            return React.createElement(
              "li",
              { key: c },
              option
            );
          })
        )
      );
    }
  }]);

  return List;
}(React.Component);

var AddItem = function (_React$Component4) {
  _inherits(AddItem, _React$Component4);

  function AddItem() {
    _classCallCheck(this, AddItem);

    return _possibleConstructorReturn(this, (AddItem.__proto__ || Object.getPrototypeOf(AddItem)).apply(this, arguments));
  }

  _createClass(AddItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          null,
          "Add Item"
        )
      );
    }
  }]);

  return AddItem;
}(React.Component);

var template = React.createElement(
  "div",
  null,
  React.createElement(Header, null),
  React.createElement(Action, null),
  React.createElement(List, null),
  React.createElement(AddItem, null)
);

ReactDOM.render(template, document.getElementById("root"));
