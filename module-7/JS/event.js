const Events = require("events");

const myEmitter = new Events.EventEmitter();

myEmitter.on("birthday", (name) => {
  console.log("HAPPY BIRTHDAY TO YOU", name);
});

myEmitter.emit("birthday", "Jhora");
