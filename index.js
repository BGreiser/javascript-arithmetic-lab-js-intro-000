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

function increment(start, inc) {
  let a = start += inc;
  return a;
}

function decrement(start, dec) {
  let a = start -= dec;
  return a;
}
