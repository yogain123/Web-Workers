// Delegating heavy For loop Calculation to Web Worker
if (window.Worker) {
  let worker = new Worker("worker.js");
  let message = 1000000000; // can be object
  worker.postMessage(message);

  console.log("Done Execution");

  worker.onmessage = function(e) {
    console.log(`${e.data}`);
  };
}

/**
 * Output:
 * Done Execution
 * 1000000001
 */

//===============================================================

// Normal Running Without Web Worker
/* if (true) {
  let count = 0;
  for (let i = 0; i <= 1000000000; i++) {
    count++;
  }
  console.log(count);
  console.log("Done Execution");
}  */

/**
 * Output:
 * 1000000001
 * Done Execution
 */
