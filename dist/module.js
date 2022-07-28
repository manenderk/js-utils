import $6PEjo$bootstrapjsdistmodal from "bootstrap/js/dist/modal";


var $a206762815fbcfb7$export$93b05b3225bc4c8a = function(modalId) {
    var myModalEl = document.getElementById(modalId);
    var modal = (0, $6PEjo$bootstrapjsdistmodal).getOrCreateInstance(myModalEl);
    modal.show();
};
var $a206762815fbcfb7$export$d74160dfe6808346 = function(modalId) {
    var myModalEl = document.getElementById(modalId);
    var modal = (0, $6PEjo$bootstrapjsdistmodal).getOrCreateInstance(myModalEl);
    modal.hide();
};
var $a206762815fbcfb7$export$d28504e3154209a9 = function(modalId) {
    var myModalEl = document.getElementById(modalId);
    var modal = (0, $6PEjo$bootstrapjsdistmodal).getOrCreateInstance(myModalEl);
    modal.toggle();
};


var $3fc7194de1ee47a5$export$a0eba7d0e22fc22f = function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var params = {};
    urlParams.forEach(function(value, key) {
        params[key] = value;
    });
    return params;
};
var $3fc7194de1ee47a5$export$5c9217d9513756b1 = function(paramName) {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    return urlParams.get(paramName);
};


var $1bb034209219329b$export$d07f57595c356899 = function(str) {
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
var $1bb034209219329b$export$17d93dc6a628db25 = function(str) {
    if (!str) return "";
    var strArray = str.split(" ");
    strArray = strArray.map(function(word) {
        return $1bb034209219329b$export$d07f57595c356899(word);
    });
    strArray = strArray.filter(function(s) {
        return s;
    });
    return strArray.join(" ");
};
var $1bb034209219329b$export$4b420aa11877fcac = function(strArray) {
    if (!strArray || strArray.length == 0) return;
    var formattedArray = strArray.map(function(s) {
        return $1bb034209219329b$export$d07f57595c356899(s);
    });
    formattedArray = formattedArray.filter(function(s) {
        return s;
    });
    return formattedArray.join(" ");
};


var $8bcf529c3a0ae812$export$e12084749128a729 = function(dataURL, fileName) {
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




export {$a206762815fbcfb7$export$93b05b3225bc4c8a as showBootstrapModal, $a206762815fbcfb7$export$d74160dfe6808346 as hideBootstrapModal, $a206762815fbcfb7$export$d28504e3154209a9 as toggleBootstrapMoal, $3fc7194de1ee47a5$export$5c9217d9513756b1 as getQueryParamValue, $3fc7194de1ee47a5$export$a0eba7d0e22fc22f as getAllQueryParams, $1bb034209219329b$export$d07f57595c356899 as capitalizeFirstLetter, $1bb034209219329b$export$17d93dc6a628db25 as getCapitalizedString, $1bb034209219329b$export$4b420aa11877fcac as getCaptializedStringFromArray, $8bcf529c3a0ae812$export$e12084749128a729 as getFileFromDataURL};
//# sourceMappingURL=module.js.map
