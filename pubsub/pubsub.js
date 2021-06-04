let subscribers = {};

module.exports = {
  publish(event, data) {
    // The method to publish an update
    if (!subscribers[event]) return;

    subcribers[event].forEach((subscriberCallback) => subscriberCallback(data));
  },
  subscribe(event, callback) {
    // The method to subscribe to an update
    if (!subscribers[event]) {
      subscribers[event] = [];
    }

    subscribers[event].push(callback);
  },
};
