let fizzBuzzEndResult = "";
/**
 * FizzBuzz
 * @param {*} start
 * @param {*} end
 * @param {*} a
 * @param {*} b
 */
const fizzBuzz = (start, end, a, b) => {
  // var number=document.getElementById("number").value;
  // document.getElementById("demo").innerHTML
  // Using document.write() after an HTML document is loaded, will delete all existing HTML:
  for (let i = start; i <= end; i++) {
    fizzBuzzEndResult +=
      ((i % a ? "" : "fizz") + (i % b ? "" : "buzz") || i) + " , ";
    // console.log((i % a ? "" : "fizz") + (i % b ? "" : "buzz") || i);
    // console.log((++i % a ? "" : "fizz") + (i % b ? "" : "buzz") || i);
  }
  document.getElementById("fizzBuzzResult").innerHTML = fizzBuzzEndResult;
  //   return fizzBuzzEndResult;
};
