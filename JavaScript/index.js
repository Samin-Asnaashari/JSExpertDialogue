/**
 * FizzBuzz:
 * @param {*} start
 * @param {*} end
 * @param {*} a
 * @param {*} b
 */
const fizzBuzz = (start, end, a, b) => {
  let fizzBuzzEndResult = "";
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

/**
 * PASCAL Triangle:
 */
function printPascalTriangle() {
  document.getElementById("pascal").innerHTML = "";
  var rows = document.getElementById("numRows").value;
  //   var arr = generatePascal(+rows);
  var arr = createPascalTriangle(rows);
  for (var i = 0; i < arr.length; i++) {
    var div = document.createElement("div");
    div.className = "divblock";
    for (var j = 0; j < arr[i].length; j++) {
      var span = document.createElement("span");
      span.innerHTML = arr[i][j];
      span.className = "block";
      div.appendChild(span);
    }
    document.getElementById("pascal").appendChild(div);
  }
}
function generatePascal(n) {
  var arr = [];
  var tmp;
  for (var i = 0; i < n; i++) {
    arr[i] = [];
    for (var j = 0; j <= i; j++) {
      if (j == i) {
        arr[i].push(1);
      } else {
        tmp =
          (!!arr[i - 1][j - 1] ? arr[i - 1][j - 1] : 0) +
          (!!arr[i - 1][j] ? arr[i - 1][j] : 0);
        arr[i].push(tmp);
      }
    }
  }
  return arr;
}
function createPascalTriangle(numRows) {
  var pascalTriangle = [];
  for (var i = 0; i < numRows; i++) {
    pascalTriangle[i] = new Array(i + 1);

    for (var j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        pascalTriangle[i][j] = 1;
      } else {
        pascalTriangle[i][j] =
          pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
      }
    }
  }
  return pascalTriangle;
}
