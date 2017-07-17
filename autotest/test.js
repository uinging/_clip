var assert = require('assert');
var Todo = require('./todo');
var todo = new Todo();
var testsCompeleted = 0;

function deleteTest(){
	todo.add('Delete Me');
	assert.equal(todo.getCount(), 1, '1 item should exist');
	todo.deleteAll();
	assert.equal(todo.getCount(), 0, 'No item should exist');
	testsCompeleted++;
}

function addTest(){
	todo.deleteAll();
	todo.add('Added');
	assert.notEqual(todo.getCount(), 0, '1 item should exist');
	assert.equal(todo.getCount(), 1, '1 item should exist');
	testsCompeleted++;
}

function doAsyncTest(cb){
	todo.doAsync(function(value) {
		assert.ok(value, 'Callback should be passed true');
		testsCompeleted++;
		cb();
	});
}

function throwTest(cb) {
	assert.throws(todo.add, /requires/);
	testsCompeleted++;
}

deleteTest();
addTest();
throwTest();
doAsyncTest(function(){
	console.log('Completed ' + testsCompeleted + ' tests');
});