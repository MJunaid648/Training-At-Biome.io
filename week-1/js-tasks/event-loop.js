// Example code#1
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

/*
The expected output of the above code is as follows:
Start
End
Promise
Timeout

The reason behind is the event loop.

As the line#1 executes the console.log statement, it prints the word "start". 
As the JS comes to the line#2, it is the setTimeout() function. The event loop takes over the control and 
the setTimeout() gets into the macro task queue.
As we know the JS is a single threaded language, so it go to the next line without waiting for the setTimeout's 
callback function execution. And there, again an asynchronous function i.e Promise(). The promise again goes to 
the task queue but this time, the queue is not the macro task queue  rather, it is a micro task queue.
Then JS go to the line#4 and log the string "End" on to the console. as the callstack gets free from the calls,
the event loop get to the task queues one after the other.
As we know the micro task queue has more priority than that of macro task queue. so as the callStack gets empty,
the event loop first places the micro task queue on the call stack to be executed and it is the promise that is 
present at the micro task queue. So it will be executes and it prints out the string "Promise" on the console.
And then, as the micro task queue gets empty, it is the number of macro task queue to place its member that is the
setTimeout callback on the callStack. so it will be executed and prints the string "Timeout"
*/

// example code#2
setTimeout(() => console.log("Timeout 1"), 0);
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timeout 2"), 0);
Promise.resolve().then(() => console.log("Promise 2"));

/*
The same is the reason here. The output will be:
Promise 1
Promise 2
Timeout 1
Timeout 2

As the JS go from line 1 to line 4, all the lines have the async tasks. So the promises at line 2 and 4
go to the micro task queue and the callbacks present in the setTimeout on the line 1 and 3 go to the
macro task queue.
Then, as per the high priority of micro task queue, the callbacks present in the micro task queue are placed on the
callStack one by one and it prints first the "Promise 1" and then the "Promise 2" strings in the same order on to 
the console.
Then when it comes to the macro task queue, the callbacks from the setTimeouts get on to the call stack one by one
and prints the strings "Timeout 1" and "Timeout 2" in the same order.
*/
