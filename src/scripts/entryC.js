require("../styles/a.css");
var commonABC = require("./modules/common-a-b-c");

var Hello = require("./components/hello.jsx");

var React = require("react");
var ReactDom = require("react-dom");
var a =13;
ReactDom.render(<Hello />,document.getElementById("content"));

document.getElementById("test").innerHTML = "111";
