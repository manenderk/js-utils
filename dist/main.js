var $b4te3$bootstrapjsdistmodal = require("bootstrap/js/dist/modal");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "SayHello", function () { return $5d1a58622fe5856f$export$b999473040af7d92; });
$parcel$export(module.exports, "showBootstrapModal", function () { return $930aefb5c5c55439$export$93b05b3225bc4c8a; });
$parcel$export(module.exports, "hideBootstrapModal", function () { return $930aefb5c5c55439$export$d74160dfe6808346; });
$parcel$export(module.exports, "toggleBootstrapMoal", function () { return $930aefb5c5c55439$export$d28504e3154209a9; });
$parcel$export(module.exports, "getQueryParamValue", function () { return $f3f8a6d61cfd7e92$export$5c9217d9513756b1; });
$parcel$export(module.exports, "getAllQueryParams", function () { return $f3f8a6d61cfd7e92$export$a0eba7d0e22fc22f; });
$parcel$export(module.exports, "capitalizeFirstLetter", function () { return $b1c68b5ae06f7edf$export$d07f57595c356899; });
var $5d1a58622fe5856f$export$b999473040af7d92 = function(name) {
    return "Hello ".concat(name);
};



var $930aefb5c5c55439$export$93b05b3225bc4c8a = function(elementId) {
    var myModalEl = document.getElementById(elementId);
    var modal = (0, ($parcel$interopDefault($b4te3$bootstrapjsdistmodal))).getOrCreateInstance(myModalEl);
    modal.show();
};
var $930aefb5c5c55439$export$d74160dfe6808346 = function(elementId) {
    var myModalEl = document.getElementById(elementId);
    var modal = (0, ($parcel$interopDefault($b4te3$bootstrapjsdistmodal))).getOrCreateInstance(myModalEl);
    modal.hide();
};
var $930aefb5c5c55439$export$d28504e3154209a9 = function(elementId) {
    var myModalEl = document.getElementById(elementId);
    var modal = (0, ($parcel$interopDefault($b4te3$bootstrapjsdistmodal))).getOrCreateInstance(myModalEl);
    modal.toggle();
};


var $f3f8a6d61cfd7e92$export$a0eba7d0e22fc22f = function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var params = {};
    urlParams.forEach(function(value, key) {
        params[key] = value;
    });
    return params;
};
var $f3f8a6d61cfd7e92$export$5c9217d9513756b1 = function(paramName) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    return urlParams.get(paramName);
};


var $b1c68b5ae06f7edf$export$d07f57595c356899 = function(str) {
    if (!str) return "";
    var strArray = str.split(".");
    strArray = strArray.map(function(s) {
        var _a, _b;
        s = s.trim();
        if (!s) return "";
        return ((_a = s.charAt(0)) === null || _a === void 0 ? void 0 : _a.toUpperCase()) + ((_b = s.slice(1)) === null || _b === void 0 ? void 0 : _b.toLowerCase());
    });
    return strArray.join(". ");
};




//# sourceMappingURL=main.js.map
