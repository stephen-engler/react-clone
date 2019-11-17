"use strict";
exports.__esModule = true;
var ReactClone_1 = require("../ReactClone/ReactClone");
var Button = function () {
    return ReactClone_1.createElement("button", { onClick: function () { return console.log("clicked"); } }, ["click"]);
};
var HelloWorld = function () { return ReactClone_1.createElement("p", null, ["hello world", Button]); };
var MyButton = function () {
    return ReactClone_1.createElement("button", null, "click me!!");
};
var App = function () {
    return (ReactClone_1.createElement("div", null,
        ReactClone_1.createElement("p", null, "HELLO"),
        ReactClone_1.createElement("p", null, "test")));
};
exports["default"] = App;
//# sourceMappingURL=components.js.map