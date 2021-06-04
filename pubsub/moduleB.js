// The subscriber module
const pubSub = require("./pubsub");

pubSub.subscribe("anEvent", (data) => {
  console.log(`"anEvent", was published with the data: "${data.msg}"`);
});
