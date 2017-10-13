var Test = require('segmentio-integration-tester');
var facade = require('segmentio-facade');
var Attribution = require('..');
var should = require('should');
var assert = require('assert');

describe('Delighted', function() {
  var delighted;
  var settings;
  var test;

  beforeEach(function() {
    settings = {};
    delighted = new Delighted(settings);
    test = Test(delighted, __dirname);
  });
});
