const keyValueToString = ([key, value]) => {
  if (typeof value === `object` && !Array.isArray(value)) {
    throw new Error('Please check your params');
  }
  return `${key}=${value}`;
};

module.exports.queryString = obj =>
  Object.entries(obj).map(keyValueToString).join('&');

module.exports.parse = string =>
  Object.fromEntries(string.split('&').map(item => item.split('=')));
