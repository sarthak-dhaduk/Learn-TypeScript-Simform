"use strict";
exports.__esModule = true;
var stInfo = /** @class */ (function () {
    function stInfo(_fname, _lname) {
        this._fname = _fname;
        this._lname = _lname;
    }
    stInfo.prototype.classData = function () {
        return this._fname + " " + this._lname;
    };
    return stInfo;
}());
exports["default"] = stInfo;
