"use strict";

exports.__esModule = true;

var jQuery = require("jquery");

window.$ = jQuery;
window.jQuery = jQuery;

var render = function render() {
  console.log("loaded!");
};

var load = function load() {
  $(document).ready(function () {
    render();
  });
};

load();