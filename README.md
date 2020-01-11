# Web Workers

### Executing New Worker

`let worker = new Worker("<worker-file.js>")`

```
let message = "some message";

worker.postMessage(message)

worker.onmessage = function(e){
// e.data will contain the message returned after span worker executed task and return message
}
```

**worker.postMessage** will post message and send data to worker for doing execution on it.
**worker.onmessage** will keep on listening to message which is posted

- JS is Single Thread, Non - Blocking I/O operations eg: Web API is been put into callstack queue for waiting, but eventually it also get executing in main thread only after Call Stack is empty.
- Web Worker Actually Create a pool of Worker, or Spawn new Thread out of it to execute give task, or any heavy Calculations.
- A Spawned Thread Can also Spawn a new thread out of it and it can go as many as possible.
- Worker Post Message by worker.postMessage(message)
- Worker Listen to Message by worker.onmessage = fn

> All in all It Spawn a new Thread out of main thread to do some other calculation or work, so the main script won't be blocked and calculation will happen in new Spawned thread.

> The Above Example Shows to Add 2 number, and that 2 number is not getting added by main thread, but getting added by Web Worker eg: New spawn Thread.

###### Author: Yogendra
