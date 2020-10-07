// app.js on repl.it
// https://appdividend.com/2018/12/17/javascript-array-find-example-array-prototype-find-tutorial/

var data = [20, 18, 15, 10, 9];

var found = data.find(function(element) {
  return element < 12;
});

console.log(found);
