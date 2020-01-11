this.onmessage = function(e) {
  let limit = e.data;
  let count = 0;
  for (let i = 0; i <= limit; i++) {
    count++;
  }
  this.postMessage(count);
};
