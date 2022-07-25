export const getQueryParams = (): {} => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const params = {};
  urlParams.forEach(function (value, key) {
    params[key] = value;
  });
  return params;
};

export const getQueryParamValue = (paramName: string): string => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(paramName);
};

