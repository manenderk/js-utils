const getQueryParamValue = (paramName: string): string => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(paramName);
};

export default getQueryParamValue;
