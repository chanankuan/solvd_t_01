String.prototype.plus = function (term) {
  const maxLen = Math.max(this.length, term.length);

  // add 0s at the start if one of the numbers has less digits
  const a = this.padStart(maxLen, "0");
  const b = term.padStart(maxLen, "0");

  const resultArr = [];
  let carry = 0;

  // iterate through every digit
  for (let i = maxLen - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + carry;

    resultArr.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  // after iteration check if the carry is not empty
  // push if it is not empty
  if (carry) {
    resultArr.push(carry);
  }

  // /^0+(?!$)/ for replacing 0s at the beginning
  return resultArr
    .reverse()
    .join("")
    .replace(/^0+(?!$)/, "");
};

String.prototype.minus = function (term) {
  const maxLen = Math.max(this.length, term.length);

  // add 0s at the start if one of the numbers has less digits
  const a = this.padStart(maxLen, "0");
  const b = term.padStart(maxLen, "0");

  const resultArr = [];
  let borrow = 0;

  for (let i = maxLen - 1; i >= 0; i--) {
    let temp1 = Number(a[i]) - borrow;
    let temp2 = Number(b[i]);

    if (temp1 < temp2) {
      temp1 += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }

    resultArr.push(temp1 - temp2);
  }

  return resultArr
    .reverse()
    .join("")
    .replace(/^0+(?!$)/, "");
};

String.prototype.compare = function (str) {
  const a = this;
  const b = str;

  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;

  return a.localeCompare(b);
};

String.prototype.divide = function (divisor) {
  if (divisor === "0") throw new Error("Division by zero");

  let dividend = this.replace(/^0+/, "") || "0";
  divisor = divisor.replace(/^0+/, "") || "0";

  if (dividend.compare(divisor) < 0) return "0";

  let quotient = "";
  let remainder = "";

  for (let i = 0; i < dividend.length; i++) {
    remainder += dividend[i];
    remainder = remainder.replace(/^0+/, "") || "0";

    let count = 0;
    while (remainder.compare(divisor) >= 0) {
      remainder = remainder.minus(divisor);
      count++;
    }

    quotient += count;
  }

  return quotient.replace(/^0+(?!$)/, "") || "0";
};

String.prototype.multiply = function (factor) {
  const num1 = this.toString();
  const num2 = factor.toString();
  let result = "";

  for (let i = num2.length - 1; i >= 0; i--) {
    let temp = "";
    for (let j = 1; j <= Number(num2[i]); j++) {
      temp = temp.plus(num1);
    }

    temp = temp.padEnd(temp.length + num2.length - i - 1, "0");
    result = result.plus(temp);
  }

  // return "0" if result === ""
  return result || "0";
};
