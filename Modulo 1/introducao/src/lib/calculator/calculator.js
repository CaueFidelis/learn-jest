module.exports.sum = (num1, num2) => {
  const int1 = parseInt(num1, 10);
  const int2 = parseInt(num2, 10);

  if (Number.isNaN(parseInt(int1, 10)) || Number.isNaN(parseInt(int2, 10))) {
    throw new Error('Please check your input');
  }

  return int1 + int2;
};

module.exports.subtract = (num1, num2) => {
  const int1 = parseFloat(num1, 10);
  const int2 = parseFloat(num2, 10);

  if (Number.isNaN(parseInt(int1, 10)) || Number.isNaN(parseInt(int2, 10))) {
    throw new Error('Please check your input');
  }

  return int1 - int2;
};
