"use strict";

function Gif(_ref) {
  var id = _ref.id;
  var src = "https://media.giphy.com/media/".concat(id, "/giphy.gif");
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: ""
  });
}
var app = /*#__PURE__*/React.createElement(Gif, {
  id: "33OrjzUFwkwEg"
});
var root = document.getElementById('root');
ReactDOM.render(app, root);
