"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var Button = function () {
    return index_1.createElement("button", { onClick: function () { return console.log("clicked"); } }, ["click"]);
};
var HelloWorld = function () { return index_1.createElement("p", null, ["hello world", Button]); };
var button = function () {
    return {
        type: "button",
        children: ["Click Me!!!!"],
        props: function onClick() {
            console.log("clicked");
        }
    };
};
var App = function () { return index_1.createElement("div", null, [HelloWorld]); };
exports["default"] = App;
//# sourceMappingURL=components.js.map