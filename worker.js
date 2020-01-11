this.onmessage = function(e) {
  console.log(e.data);
  this.postMessage({ result: e.data.num1 + e.data.num2 });
};
