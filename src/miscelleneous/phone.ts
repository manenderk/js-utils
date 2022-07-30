/**
 * Function that returns a calling/phone country code
 * @returns Calling/Phone Country code of the user
 */
export const getUserCountryCallingCode = async (): Promise<string> => {
  const resp = await fetch("https://ipapi.co/country_calling_code");
  const data = await resp.text();
  return data || '';
}