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
$parcel$export(module.exports, "formatNumberAsCurrency", function () { return $86abb0c9c2f16636$export$9ab4a4e7f132f952; });
$parcel$export(module.exports, "capitalizeFirstLetter", function () { return $b1c68b5ae06f7edf$export$d07f57595c356899; });
$parcel$export(module.exports, "getCapitalizedString", function () { return $b1c68b5ae06f7edf$export$17d93dc6a628db25; });
$parcel$export(module.exports, "getCaptializedStringFromArray", function () { return $b1c68b5ae06f7edf$export$4b420aa11877fcac; });
$parcel$export(module.exports, "getFileFromDataURL", function () { return $9899dce74fec2f3e$export$e12084749128a729; });
$parcel$export(module.exports, "checkPasswordStrength", function () { return $b9a538f3e4ebb1b0$export$d05e803710e799dd; });
$parcel$export(module.exports, "StrengthFactors", function () { return $b9a538f3e4ebb1b0$export$2211ae89e86d4fec; });
$parcel$export(module.exports, "PasswordStrength", function () { return $b9a538f3e4ebb1b0$export$ace2b65713be14d8; });
$parcel$export(module.exports, "getUserCountryCallingCode", function () { return $66bfd9381056d2e5$exports.getUserCountryCallingCode; });

const $930aefb5c5c55439$export$93b05b3225bc4c8a = (modalId)=>{
    const myModalEl = document.getElementById(modalId);
    const modal = (0, ($parcel$interopDefault($b4te3$bootstrapjsdistmodal))).getOrCreateInstance(myModalEl);
    modal.show();
};
const $930aefb5c5c55439$export$d74160dfe6808346 = (modalId)=>{
    const myModalEl = document.getElementById(modalId);
    const modal = (0, ($parcel$interopDefault($b4te3$bootstrapjsdistmodal))).getOrCreateInstance(myModalEl);
    modal.hide();
};
const $930aefb5c5c55439$export$d28504e3154209a9 = (modalId)=>{
    const myModalEl = document.getElementById(modalId);
    const modal = (0, ($parcel$interopDefault($b4te3$bootstrapjsdistmodal))).getOrCreateInstance(myModalEl);
    modal.toggle();
};


const $9899dce74fec2f3e$export$e12084749128a729 = (dataURL, fileName = "image")=>{
    const base64 = dataURL.split(".")[1];
    const mimeType = dataURL.split(".")[0].split(":")[1].split(";")[0];
    const fileExt = mimeType.split("/")[1];
    if (fileName.indexOf(fileExt) == -1) fileName += `.${fileExt}`;
    const file = new File([
        base64
    ], fileName, {
        type: mimeType
    });
    return file;
};


var $b9a538f3e4ebb1b0$export$ace2b65713be14d8;
(function(PasswordStrength1) {
    PasswordStrength1["weak"] = "weak";
    PasswordStrength1["medium"] = "medium";
    PasswordStrength1["strong"] = "strong";
})($b9a538f3e4ebb1b0$export$ace2b65713be14d8 || ($b9a538f3e4ebb1b0$export$ace2b65713be14d8 = {}));
var $b9a538f3e4ebb1b0$export$2211ae89e86d4fec;
(function(StrengthFactors1) {
    StrengthFactors1["hasUpperCase"] = "hasUpperCase";
    StrengthFactors1["hasLowerCase"] = "hasLowerCase";
    StrengthFactors1["hasDigit"] = "hasDigit";
    StrengthFactors1["hasSpecialCharacter"] = "hasSpecialCharacter";
    StrengthFactors1["hasMinimum6CharacterLength"] = "hasMinimum6CharacterLength";
})($b9a538f3e4ebb1b0$export$2211ae89e86d4fec || ($b9a538f3e4ebb1b0$export$2211ae89e86d4fec = {}));
const $b9a538f3e4ebb1b0$export$d05e803710e799dd = (password)=>{
    let strength = $b9a538f3e4ebb1b0$export$ace2b65713be14d8.weak;
    let failingFactors = [];
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialCharacter = /[!@#\$%\^\&*\)\(+=._-]/.test(password);
    const passwordLength = password.length;
    if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialCharacter && passwordLength >= 8) strength = $b9a538f3e4ebb1b0$export$ace2b65713be14d8.strong;
    else if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialCharacter && passwordLength >= 6) strength = $b9a538f3e4ebb1b0$export$ace2b65713be14d8.medium;
    else if (hasUpperCase && hasLowerCase && hasSpecialCharacter && passwordLength >= 8) strength = $b9a538f3e4ebb1b0$export$ace2b65713be14d8.medium;
    else strength = $b9a538f3e4ebb1b0$export$ace2b65713be14d8.weak;
    if (!hasUpperCase) failingFactors.push($b9a538f3e4ebb1b0$export$2211ae89e86d4fec.hasUpperCase);
    if (!hasLowerCase) failingFactors.push($b9a538f3e4ebb1b0$export$2211ae89e86d4fec.hasLowerCase);
    if (!hasDigit) failingFactors.push($b9a538f3e4ebb1b0$export$2211ae89e86d4fec.hasDigit);
    if (!hasSpecialCharacter) failingFactors.push($b9a538f3e4ebb1b0$export$2211ae89e86d4fec.hasSpecialCharacter);
    if (passwordLength < 6) failingFactors.push($b9a538f3e4ebb1b0$export$2211ae89e86d4fec.hasMinimum6CharacterLength);
    return {
        strength: strength,
        failingFactors: failingFactors
    };
};


const $4054910e1db3a72c$export$b44843cafad00173 = ()=>{
    const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
    return userLocale;
};


const $86abb0c9c2f16636$export$9ab4a4e7f132f952 = (num, currency = "USD", locale)=>{
    num = num || 0;
    if (typeof num == "string") num = parseFloat(num);
    if (!locale) locale = (0, $4054910e1db3a72c$export$b44843cafad00173)();
    const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency
    });
    return formatter.format(num);
};


const $b1c68b5ae06f7edf$export$d07f57595c356899 = (str)=>{
    if (!str) return "";
    let strArray = str.split(".");
    strArray = strArray.map((s)=>{
        var _a, _b;
        s = s.trim();
        if (!s) return "";
        return ((_a = s.charAt(0)) === null || _a === void 0 ? void 0 : _a.toUpperCase()) + ((_b = s.slice(1)) === null || _b === void 0 ? void 0 : _b.toLowerCase());
    });
    return strArray.join(". ");
};
const $b1c68b5ae06f7edf$export$17d93dc6a628db25 = (str)=>{
    if (!str) return "";
    let strArray = str.split(" ");
    strArray = strArray.map((word)=>$b1c68b5ae06f7edf$export$d07f57595c356899(word));
    strArray = strArray.filter((s)=>s);
    return strArray.join(" ");
};
const $b1c68b5ae06f7edf$export$4b420aa11877fcac = (strArray)=>{
    if (!strArray || strArray.length == 0) return;
    let formattedArray = strArray.map((s)=>$b1c68b5ae06f7edf$export$d07f57595c356899(s));
    formattedArray = formattedArray.filter((s)=>s);
    return formattedArray.join(" ");
};


const $f3f8a6d61cfd7e92$export$a0eba7d0e22fc22f = ()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const params = {};
    urlParams.forEach(function(value, key) {
        params[key] = value;
    });
    return params;
};
const $f3f8a6d61cfd7e92$export$5c9217d9513756b1 = (paramName)=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(paramName);
};


var $66bfd9381056d2e5$exports = {};

$parcel$export($66bfd9381056d2e5$exports, "getUserCountryCallingCode", function () { return $66bfd9381056d2e5$export$4337240a21d6e52e; }, function (v) { return $66bfd9381056d2e5$export$4337240a21d6e52e = v; });
var $66bfd9381056d2e5$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const $66bfd9381056d2e5$export$4337240a21d6e52e = ()=>$66bfd9381056d2e5$var$__awaiter(void 0, void 0, void 0, function*() {
        const resp = yield fetch("https://ipapi.co/country_calling_code");
        const data = yield resp.text();
        return data || "";
    });




//# sourceMappingURL=main.js.map
