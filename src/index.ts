import {
  hideBootstrapModal, showBootstrapModal, toggleBootstrapMoal
} from "./bootstrap/bootstrap_utilities";
import { getFileFromDataURL } from "./medias/media";
import { checkPasswordStrength, PasswordStrength, StrengthFactors } from './miscelleneous/password';
import { formatNumberAsCurrency } from "./numbers/currency";
import { capitalizeFirstLetter, getCapitalizedString, getCaptializedStringFromArray } from "./strings/sentences";
import { getAllQueryParams, getQueryParamValue } from "./url/query_params";
import { getUserCountryCallingCode } from "./miscelleneous/phone";

export {
  // Bootstrap
  showBootstrapModal,
  hideBootstrapModal,
  toggleBootstrapMoal,

  // Query Params
  getQueryParamValue,
  getAllQueryParams,

  //Currency
  formatNumberAsCurrency,

  // Sentences
  capitalizeFirstLetter,
  getCapitalizedString,
  getCaptializedStringFromArray,

  // Media
  getFileFromDataURL,

  // Passwords
  checkPasswordStrength,
  StrengthFactors,
  PasswordStrength,

  // Phone
  getUserCountryCallingCode,
};