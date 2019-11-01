"use strict";
exports.__esModule = true;
var jQuery = require("jquery");
var ReactDomClone_1 = require("../ReactClone/ReactDomClone");
var components_1 = require("./components");
window.$ = jQuery;
window.jQuery = jQuery;
var load = function () {
    $(document).ready(function () {
        ReactDomClone_1.render(components_1["default"]);
    });
};
load();
//# sourceMappingURL=index.jsx.map