"use strict";
exports.__esModule = true;
var helloWorld = function () {
    return {
        type: "p",
        children: ["hello world"]
    };
};
var app = function () {
    return {
        type: "div",
        children: [helloWorld]
    };
};
exports["default"] = app;
//# sourceMappingURL=components.js.map