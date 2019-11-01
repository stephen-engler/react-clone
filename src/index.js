"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jQuery = require("jquery");
var components_1 = require("./components");
var lodash_1 = require("lodash");
window.$ = jQuery;
window.jQuery = jQuery;
var virtualDom;
exports.createElement = function (type, props, children) {
    if (children === void 0) { children = []; }
    return {
        type: type,
        props: props,
        children: children
    };
};
var createVirtualDom = function (myComponent) {
    var node = myComponent();
    if (node.children[0] && node.children instanceof Function) {
    }
    var nodeChildren = node.children.map(function (child) {
        if (child instanceof Function) {
            return createVirtualDom(child);
        }
        return child;
    });
    return __assign(__assign({}, node), { children: nodeChildren });
};
var findDiff = function (prevDom, updatedDom) {
    return lodash_1.isEqual(prevDom, updatedDom);
};
var render = function () {
    var updatedDom = createVirtualDom(components_1["default"]);
    if (!findDiff(updatedDom, virtualDom)) {
        console.log("not equal");
        virtualDom = updatedDom;
        renderComponentTreeToDom(virtualDom);
    }
};
var renderComponentTreeToDom = function (newDomElement) {
    var node = document.getElementById("root");
    renderComponentToDom(newDomElement, node);
};
var renderComponentToDom = function (newComponent, parentNode) {
    console.log(newComponent);
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
var load = function () {
    $(document).ready(function () {
        render();
    });
};
load();
//# sourceMappingURL=index.js.map