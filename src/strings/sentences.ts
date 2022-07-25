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