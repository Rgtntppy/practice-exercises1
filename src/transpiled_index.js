"use strict";

var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Gif(_ref) {
  var id = _ref.id;
  var src = "https://media.giphy.com/media/".concat(id, "/giphy.gif");
  return /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    alt: ""
  });
}
var app = /*#__PURE__*/_react.default.createElement(Gif, {
  id: "33OrjzUFwkwEg"
});
var root = document.getElementById('root');
ReactDOM.render(app, root);
