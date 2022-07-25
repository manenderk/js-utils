const getQueryParams = (): {} => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const params = {};
  urlParams.forEach(function (value, key) {
    params[key] = value;
  });
  return params;
};

export default getQueryParams;
