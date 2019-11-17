"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var ReactClone_1 = require("../ReactClone/ReactClone");
var findDiff = function (prevDom, updatedDom) {
    return lodash_1.isEqual(prevDom, updatedDom);
};
exports.render = function (app) {
    var updatedDom = ReactClone_1.createVirtualDom(app);
    if (!findDiff(updatedDom, ReactClone_1.virtualDom)) {
        console.log(updatedDom);
        ReactClone_1.setVirtualDom(updatedDom);
        renderComponentTreeToDom(updatedDom);
    }
};
var renderComponentTreeToDom = function (newDomElement) {
    var node = document.getElementById("root");
    renderComponentToDom(newDomElement, node);
};
var renderComponentToDom = function (newComponent, parentNode) {
    var node = document.createElement(newComponent.type);
    if (newComponent.props) {
    }
    newComponent.children.forEach(function (child) {
        if (lodash_1.isString(child)) {
            node.appendChild(document.createTextNode(child));
        }
        else if (child instanceof Object) {
            renderComponentToDom(child, node);
        }
    });
    parentNode.appendChild(node);
};
//# sourceMappingURL=ReactDomClone.js.map