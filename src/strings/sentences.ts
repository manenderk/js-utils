/**
 * Function that will capitalize first letter of each sentence in a string.
 * @example
 * To format string: hi i am john doe. i am a developer.'
 * capitalizeFirstLetter('hi i am john doe. i am a developer.')
 * returns Hi i am john doe. I am a developer.
 * @param str - String that has to be formatted
 * @returns Formatted String
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) {
    return '';
  }
  let strArray = str.split('.');
  strArray = strArray.map(s => {
    s = s.trim();
    if (!s) {
      return '';
    }
    return s.charAt(0)?.toUpperCase() + s.slice(1)?.toLowerCase();
  })

  return strArray.join('. ');
}

/**
 * Function that will captialize first letter of each word in a string
 * @example
 * To format string: hi i am john doe.
 * capitalizeString('hi i am john doe.')
 * returns Hi I Am John Doe
 * @param str String that has to be formatted
 * @returns 
 */
export const getCapitalizedString = (str: string): string => {
  if (!str) {
    return '';
  }
  let strArray = str.split(' ');
  strArray = strArray.map(word => capitalizeFirstLetter(word));
  strArray = strArray.filter(s => s);
  return strArray.join(' ');
}

/**
 * Function that captialize each entry of input array and return a string by joining all enteries
 * @example
 * getCaptializedStringFromArray(['hi', 'i', 'am', 'john', 'doe'])
 * returns Hi I Am John Doe
 * @param strArray Array of string which has to be formatted
 * @returns String where each array element is capitalized
 */
export const getCaptializedStringFromArray = (strArray: string[]): string => {
  if (!strArray || strArray.length == 0) {
    return;
  }
  let formattedArray = strArray.map(s => capitalizeFirstLetter(s));
  formattedArray = formattedArray.filter(s => s);
  return formattedArray.join(' ');
}