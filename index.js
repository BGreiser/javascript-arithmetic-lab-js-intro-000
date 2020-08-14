function add(a,b){
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

function makeInt(string) {
  return parseInt(string, 10)
}

function preserveDecimal(string) {
  return parseFloat(string);
}

function increment(n) {
  let a = parseInt(n);
  a += a;
  return a++;
}

function decrement(n) {
  let a = parseInt(n);
  a -= a;
  return a;
}
