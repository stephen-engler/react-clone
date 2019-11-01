"use strict";
exports.__esModule = true;
var globalState;
var useState = function (initialValue) {
    var setGlobalState = function (newState) { return [(globalState = newState)]; };
    return [globalState, setGlobalState];
};
exports["default"] = useState;
//# sourceMappingURL=useState.js.map