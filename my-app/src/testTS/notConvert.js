let plusOne = function (digits) {
  let str = digits.join("");
  let numb = +str + 1;
  let preRes = numb.toString();
  let res = preRes.split("");
  return res;
};

console.log(plusOne([12, 2, 3]));
