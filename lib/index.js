
var integration = require('segmentio-integration');

var Delighted = module.exports = integration('Attribution')
  .endpoint()
  .channels(['server'])
  .ensure()
  .retries(2);

Attribution.prototype.identify = function(payload, fn) {
  return;
}
