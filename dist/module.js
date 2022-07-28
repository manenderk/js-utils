import $6PEjo$bootstrapjsdistmodal from "bootstrap/js/dist/modal";

var $e25848a391872ccb$export$b999473040af7d92 = function(name) {
    return "Hello ".concat(name);
};



var $a206762815fbcfb7$export$93b05b3225bc4c8a = function(elementId) {
    var myModalEl = document.getElementById(elementId);
    var modal = (0, $6PEjo$bootstrapjsdistmodal).getOrCreateInstance(myModalEl);
    modal.show();
};
var $a206762815fbcfb7$export$d74160dfe6808346 = function(elementId) {
    var myModalEl = document.getElementById(elementId);
    var modal = (0, $6PEjo$bootstrapjsdistmodal).getOrCreateInstance(myModalEl);
    modal.hide();
};
var $a206762815fbcfb7$export$d28504e3154209a9 = function(elementId) {
    var myModalEl = document.getElementById(elementId);
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




export {$e25848a391872ccb$export$b999473040af7d92 as SayHello, $a206762815fbcfb7$export$93b05b3225bc4c8a as showBootstrapModal, $a206762815fbcfb7$export$d74160dfe6808346 as hideBootstrapModal, $a206762815fbcfb7$export$d28504e3154209a9 as toggleBootstrapMoal, $3fc7194de1ee47a5$export$5c9217d9513756b1 as getQueryParamValue, $3fc7194de1ee47a5$export$a0eba7d0e22fc22f as getAllQueryParams, $1bb034209219329b$export$d07f57595c356899 as capitalizeFirstLetter};
//# sourceMappingURL=module.js.map
