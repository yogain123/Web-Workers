if (window.Worker) {
  let worker = new Worker("worker.js");
  let message = { num1: 1, num2: 2 };
  worker.postMessage(message);

  worker.onmessage = function(e) {
    console.log(e.data);
    console.log(`Added Number is ${e.data.result}`);
  };
}
