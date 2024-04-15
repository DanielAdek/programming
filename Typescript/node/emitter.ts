// coderpad.io

/**
 * in this exercise you will implement the createEE function that create an instance
 * of the EventEmitter class, capable of emitting a data at a given interval
 *
 * createEE takes opts as an argument which is an object containing the followings:
 *
 * opt.fn some synchronous function, the output of the function should be emitted
 * with the data event
 *
 * opt.interval the interval in milliseconds between data event
 *
 * opt.signal an abort signal event, used to emit a close event and stop the data
 * emission
 * */

import {EventEmitter} from "events";
import {clearInterval} from "timers";

class Solution {

  public static createEE(opts): EventEmitter {
    const eventEmitter: EventEmitter = new EventEmitter();

    function executeFunction() {
      if (opts.signal.aborted) {
        clearInterval(intervalId);
        eventEmitter.emit("close" )
      }

      eventEmitter.emit("data", opts.fn());
    }

    const intervalId: NodeJS.Timeout = setInterval(executeFunction, opts.interval);

    opts.signal.addEventListener("abort", () => {
      clearInterval(intervalId);
    })

    return eventEmitter;
  }
}


// Test code
let counter = 0;
const ac = new AbortController();

// emitter should emit
// in `data` events: 1, 2, 3, 4
// then emit `close` event
const e = Solution.createEE({
  fn: () => {
    return ++counter;
  },
  interval: 300,
  signal: ac.signal,
});

e.on("data", console.log);
e.on("close", () => console.log("closed"));

setTimeout(() => {
  console.log("stopping after 1 second");
  ac.abort();
}, 1000);