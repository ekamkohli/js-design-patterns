let subscribers = {};

module.exports = {
  publish() {
    // The method to publish an update
  },
  subscribe(event, callback) {
    // The method to subscribe to an update
    if (!subscribers[event]) {
      subscribers[event] = [];
    }

    subscribers[event].push(callback);
  },
};
