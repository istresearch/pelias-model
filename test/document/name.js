
var Document = require('../../Document');

module.exports.tests = {};

module.exports.tests.getName = function(test, common) {
  test('getName', function(t) {
    var doc = new Document('mytype','myid');
    t.equal(doc.getName('foo'), undefined, 'getter works');
    doc.name = { 'foo': 'bar' };
    t.equal(doc.getName('foo'), 'bar', 'getter works');
    t.end();
  });
};

module.exports.tests.setName = function(test, common) {
  test('setName', function(t) {
    var doc = new Document('mytype','myid');
    t.equal(doc.setName('foo','bar'), doc, 'chainable');
    t.equal(doc.name.foo, 'bar', 'setter works');
    t.end();
  });
  test('setName - validate', function(t) {
    var doc = new Document('mytype','myid');
    t.throws( doc.setName.bind(doc,1), null, 'invalid type' );
    t.throws( doc.setName.bind(doc,''), null, 'invalid length' );
    t.end();
  });
};

module.exports.tests.hasName = function(test, common) {
  test('hasName', function(t) {
    var doc = new Document('mytype','myid');
    t.equal(doc.hasName('foo'), false, 'hasser works');
    doc.name.foo = 'bar';
    t.equal(doc.hasName('foo'), true, 'hasser works');
    t.end();
  });
};

module.exports.tests.delName = function(test, common) {
  test('delName', function(t) {
    var doc = new Document('mytype','myid');
    t.equal(doc.delName('foo'), false, 'deller works');
    doc.name.foo = 'bar';
    t.equal(doc.delName('foo'), true, 'deller works');
    t.equal(doc.name.foo, undefined, 'deller works');
    t.end();
  });
};

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('name: ' + name, testFunction);
  }

  for( var testCase in module.exports.tests ){
    module.exports.tests[testCase](test, common);
  }
};