export const getUserLanguageLocale = (): string => {
  const userLocale =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
    return userLocale;
};
