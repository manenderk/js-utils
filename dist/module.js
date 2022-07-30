import $6PEjo$bootstrapjsdistmodal from "bootstrap/js/dist/modal";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

const $a206762815fbcfb7$export$93b05b3225bc4c8a = (modalId)=>{
    const myModalEl = document.getElementById(modalId);
    const modal = (0, $6PEjo$bootstrapjsdistmodal).getOrCreateInstance(myModalEl);
    modal.show();
};
const $a206762815fbcfb7$export$d74160dfe6808346 = (modalId)=>{
    const myModalEl = document.getElementById(modalId);
    const modal = (0, $6PEjo$bootstrapjsdistmodal).getOrCreateInstance(myModalEl);
    modal.hide();
};
const $a206762815fbcfb7$export$d28504e3154209a9 = (modalId)=>{
    const myModalEl = document.getElementById(modalId);
    const modal = (0, $6PEjo$bootstrapjsdistmodal).getOrCreateInstance(myModalEl);
    modal.toggle();
};


const $8bcf529c3a0ae812$export$e12084749128a729 = (dataURL, fileName = "image")=>{
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


var $620870afc27c407d$export$ace2b65713be14d8;
(function(PasswordStrength1) {
    PasswordStrength1["weak"] = "weak";
    PasswordStrength1["medium"] = "medium";
    PasswordStrength1["strong"] = "strong";
})($620870afc27c407d$export$ace2b65713be14d8 || ($620870afc27c407d$export$ace2b65713be14d8 = {}));
var $620870afc27c407d$export$2211ae89e86d4fec;
(function(StrengthFactors1) {
    StrengthFactors1["hasUpperCase"] = "hasUpperCase";
    StrengthFactors1["hasLowerCase"] = "hasLowerCase";
    StrengthFactors1["hasDigit"] = "hasDigit";
    StrengthFactors1["hasSpecialCharacter"] = "hasSpecialCharacter";
    StrengthFactors1["hasMinimum6CharacterLength"] = "hasMinimum6CharacterLength";
})($620870afc27c407d$export$2211ae89e86d4fec || ($620870afc27c407d$export$2211ae89e86d4fec = {}));
const $620870afc27c407d$export$d05e803710e799dd = (password)=>{
    let strength = $620870afc27c407d$export$ace2b65713be14d8.weak;
    let failingFactors = [];
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialCharacter = /[!@#\$%\^\&*\)\(+=._-]/.test(password);
    const passwordLength = password.length;
    if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialCharacter && passwordLength >= 8) strength = $620870afc27c407d$export$ace2b65713be14d8.strong;
    else if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialCharacter && passwordLength >= 6) strength = $620870afc27c407d$export$ace2b65713be14d8.medium;
    else if (hasUpperCase && hasLowerCase && hasSpecialCharacter && passwordLength >= 8) strength = $620870afc27c407d$export$ace2b65713be14d8.medium;
    else strength = $620870afc27c407d$export$ace2b65713be14d8.weak;
    if (!hasUpperCase) failingFactors.push($620870afc27c407d$export$2211ae89e86d4fec.hasUpperCase);
    if (!hasLowerCase) failingFactors.push($620870afc27c407d$export$2211ae89e86d4fec.hasLowerCase);
    if (!hasDigit) failingFactors.push($620870afc27c407d$export$2211ae89e86d4fec.hasDigit);
    if (!hasSpecialCharacter) failingFactors.push($620870afc27c407d$export$2211ae89e86d4fec.hasSpecialCharacter);
    if (passwordLength < 6) failingFactors.push($620870afc27c407d$export$2211ae89e86d4fec.hasMinimum6CharacterLength);
    return {
        strength: strength,
        failingFactors: failingFactors
    };
};


const $8af7b4ee17cdcc10$export$b44843cafad00173 = ()=>{
    const userLocale = navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;
    return userLocale;
};


const $8817693251774811$export$9ab4a4e7f132f952 = (num, currency = "USD", locale)=>{
    num = num || 0;
    if (typeof num == "string") num = parseFloat(num);
    if (!locale) locale = (0, $8af7b4ee17cdcc10$export$b44843cafad00173)();
    const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency
    });
    return formatter.format(num);
};


const $1bb034209219329b$export$d07f57595c356899 = (str)=>{
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
const $1bb034209219329b$export$17d93dc6a628db25 = (str)=>{
    if (!str) return "";
    let strArray = str.split(" ");
    strArray = strArray.map((word)=>$1bb034209219329b$export$d07f57595c356899(word));
    strArray = strArray.filter((s)=>s);
    return strArray.join(" ");
};
const $1bb034209219329b$export$4b420aa11877fcac = (strArray)=>{
    if (!strArray || strArray.length == 0) return;
    let formattedArray = strArray.map((s)=>$1bb034209219329b$export$d07f57595c356899(s));
    formattedArray = formattedArray.filter((s)=>s);
    return formattedArray.join(" ");
};


const $3fc7194de1ee47a5$export$a0eba7d0e22fc22f = ()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const params = {};
    urlParams.forEach(function(value, key) {
        params[key] = value;
    });
    return params;
};
const $3fc7194de1ee47a5$export$5c9217d9513756b1 = (paramName)=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(paramName);
};


var $e0ab1eb84c354847$exports = {};

$parcel$export($e0ab1eb84c354847$exports, "getUserCountryCallingCode", function () { return $e0ab1eb84c354847$export$4337240a21d6e52e; }, function (v) { return $e0ab1eb84c354847$export$4337240a21d6e52e = v; });
var $e0ab1eb84c354847$var$__awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
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
const $e0ab1eb84c354847$export$4337240a21d6e52e = ()=>$e0ab1eb84c354847$var$__awaiter(void 0, void 0, void 0, function*() {
        const resp = yield fetch("https://ipapi.co/country_calling_code");
        const data = yield resp.text();
        return data || "";
    });




export {$a206762815fbcfb7$export$93b05b3225bc4c8a as showBootstrapModal, $a206762815fbcfb7$export$d74160dfe6808346 as hideBootstrapModal, $a206762815fbcfb7$export$d28504e3154209a9 as toggleBootstrapMoal, $3fc7194de1ee47a5$export$5c9217d9513756b1 as getQueryParamValue, $3fc7194de1ee47a5$export$a0eba7d0e22fc22f as getAllQueryParams, $8817693251774811$export$9ab4a4e7f132f952 as formatNumberAsCurrency, $1bb034209219329b$export$d07f57595c356899 as capitalizeFirstLetter, $1bb034209219329b$export$17d93dc6a628db25 as getCapitalizedString, $1bb034209219329b$export$4b420aa11877fcac as getCaptializedStringFromArray, $8bcf529c3a0ae812$export$e12084749128a729 as getFileFromDataURL, $620870afc27c407d$export$d05e803710e799dd as checkPasswordStrength, $620870afc27c407d$export$2211ae89e86d4fec as StrengthFactors, $620870afc27c407d$export$ace2b65713be14d8 as PasswordStrength, $e0ab1eb84c354847$export$4337240a21d6e52e as getUserCountryCallingCode};
//# sourceMappingURL=module.js.map
