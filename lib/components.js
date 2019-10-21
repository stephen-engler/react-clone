"use strict";

exports.__esModule = true;

var div = function div() {
  return {
    type: "div",
    children: ["hello world"]
  };
};

var app = function app() {
  return div;
};

exports["default"] = app;