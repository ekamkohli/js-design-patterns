// The subscriber module
const pubSub = require("./pubsub");

const subscription = pubSub.subscribe("anEvent", (data) => {
  console.log(`"anEvent", was published with the data: "${data.msg}"`);
  subscription.unsubscribe();
});
