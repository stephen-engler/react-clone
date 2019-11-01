"use strict";
exports.__esModule = true;
var ReactClone_1 = require("../ReactClone/ReactClone");
var Button = function () {
    return ReactClone_1.createElement("button", { onClick: function () { return console.log("clicked"); } }, ["click"]);
};
var HelloWorld = function () { return ReactClone_1.createElement("p", null, ["hello world", Button]); };
exports["default"] = App;
//# sourceMappingURL=components.js.map