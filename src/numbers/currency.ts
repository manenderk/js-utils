import { getUserLanguageLocale } from "../miscelleneous/locale";

/**
 * 
 * @param num - Number value to be formatted
 * @param currency - Curreny alphabetic code underwhich which number to be formatted. Default is USD
 * @param locale - Language locale. Default is locale set in user's machine
 * @returns Number formatted in currency
 */
export const formatNumberAsCurrency = (
  num: number | string,
  currency: string = "USD",
  locale?: string
): string => {
  num = num || 0;
  if (typeof num == 'string') {
    num = parseFloat(num);
  }

  if (!locale) {
    locale = getUserLanguageLocale();
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency
  });
  return formatter.format(num);
};
