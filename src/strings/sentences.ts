/**
 * Function that will capitalize first letter of each sentence in a string.
 * @example
 * To format string: hi i am john doe. i am a developer.'
 * capitalizeFirstLetter('hi i am john doe. i am a developer.')
 * Will return: Hi i am john doe. I am a developer.
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