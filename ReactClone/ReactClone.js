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
var lodash_1 = require("lodash");
exports.createElement = function (type, props, children) {
    return {
        type: type,
        props: props,
        children: children
    };
};
exports.setVirtualDom = function (newVirtualDom) {
    exports.virtualDom = newVirtualDom;
};
exports.createVirtualDom = function (myComponent) {
    var node = myComponent();
    if (lodash_1.isString(node.children)) {
        return node;
    }
    var nodeChildren = node.children.map(function (child) {
        if (child instanceof Function) {
            return exports.createVirtualDom(child);
        }
        return child;
    });
    return __assign(__assign({}, node), { children: nodeChildren });
};
//# sourceMappingURL=ReactClone.js.map