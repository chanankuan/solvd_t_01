String.prototype.plus = function (str) {
  let n1 = +this;
  let n2 = +str;

  return String(n1 + n2);
};

String.prototype.minus = function (str) {
  let n1 = +this;
  let n2 = +str;

  return String(n1 - n2);
};

String.prototype.divide = function (str) {
  let n1 = +this;
  let n2 = +str;

  return String(n1 / n2);
};

String.prototype.multiply = function (str) {
  let n1 = +this;
  let n2 = +str;

  return String(n1 * n2);
};
