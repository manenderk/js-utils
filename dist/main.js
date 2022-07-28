var $b4te3$bootstrapjsdistmodal = require("bootstrap/js/dist/modal");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "showBootstrapModal", function () { return $930aefb5c5c55439$export$93b05b3225bc4c8a; });
$parcel$export(module.exports, "hideBootstrapModal", function () { return $930aefb5c5c55439$export$d74160dfe6808346; });
$parcel$export(module.exports, "toggleBootstrapMoal", function () { return $930aefb5c5c55439$export$d28504e3154209a9; });
$parcel$export(module.exports, "getQueryParamValue", function () { return $f3f8a6d61cfd7e92$export$5c9217d9513756b1; });
$parcel$export(module.exports, "getAllQueryParams", function () { return $f3f8a6d61cfd7e92$export$a0eba7d0e22fc22f; });
$parcel$export(module.exports, "capitalizeFirstLetter", function () { return $b1c68b5ae06f7edf$export$d07f57595c356899; });
$parcel$export(module.exports, "getCapitalizedString", function () { return $b1c68b5ae06f7edf$export$17d93dc6a628db25; });
$parcel$export(module.exports, "getCaptializedStringFromArray", function () { return $b1c68b5ae06f7edf$export$4b420aa11877fcac; });
$parcel$export(module.exports, "getFileFromDataURL", function () { return $9899dce74fec2f3e$export$e12084749128a729; });

var $930aefb5c5c55439$export$93b05b3225bc4c8a = function(modalId) {
    var myModalEl = document.getElementById(modalId);
    var modal = (0, ($parcel$interopDefault($b4te3$bootstrapjsdistmodal))).getOrCreateInstance(myModalEl);
    modal.show();
};
var $930aefb5c5c55439$export$d74160dfe6808346 = function(modalId) {
    var myModalEl = document.getElementById(modalId);
    var modal = (0, ($parcel$interopDefault($b4te3$bootstrapjsdistmodal))).getOrCreateInstance(myModalEl);
    modal.hide();
};
var $930aefb5c5c55439$export$d28504e3154209a9 = function(modalId) {
    var myModalEl = document.getElementById(modalId);
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
var $b1c68b5ae06f7edf$export$17d93dc6a628db25 = function(str) {
    if (!str) return "";
    var strArray = str.split(" ");
    strArray = strArray.map(function(word) {
        return $b1c68b5ae06f7edf$export$d07f57595c356899(word);
    });
    strArray = strArray.filter(function(s) {
        return s;
    });
    return strArray.join(" ");
};
var $b1c68b5ae06f7edf$export$4b420aa11877fcac = function(strArray) {
    if (!strArray || strArray.length == 0) return;
    var formattedArray = strArray.map(function(s) {
        return $b1c68b5ae06f7edf$export$d07f57595c356899(s);
    });
    formattedArray = formattedArray.filter(function(s) {
        return s;
    });
    return formattedArray.join(" ");
};


var $9899dce74fec2f3e$export$e12084749128a729 = function(dataURL, fileName) {
    if (fileName === void 0) fileName = "image";
    var base64 = dataURL.split(".")[1];
    var mimeType = dataURL.split(".")[0].split(":")[1].split(";")[0];
    var fileExt = mimeType.split("/")[1];
    if (fileName.indexOf(fileExt) == -1) fileName += ".".concat(fileExt);
    var file = new File([
        base64
    ], fileName, {
        type: mimeType
    });
    return file;
};




//# sourceMappingURL=main.js.map
