var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();

life.setMaxListeners(11);


// addEventListener
life.on('呵呵', function(who){
	console.log(who + ' 滚1');
});
life.on('呵呵', function(who){
	console.log(who + ' 洗碗');
});
life.on('呵呵', function(who){
	console.log(who + ' 拖地');
});
life.on('呵呵', function(who){
	console.log(who + ' 拖地4');
});
life.on('呵呵', function(who){
	console.log(who + ' 拖地5');
});
life.on('呵呵', function(who){
	console.log(who + ' 拖地6');
});
life.on('呵呵', function(who){
	console.log(who + ' 拖地7');
});
life.on('呵呵', function(who){
	console.log(who + ' 拖地8');
});
life.on('呵呵', function(who){
	console.log(who + ' 拖地9');
});
life.on('呵呵', function(who){
	console.log(who + ' 拖地10');
});
life.on('呵呵', function(who){
	console.log(who + ' 拖地11');
});
life.on('biu', function(who){
	console.log(who + ' biubiubiu~~~');
});
life.on('gun', function(who){
	console.log(who + ' 滚');
});

life.removeAllListeners();



var heheListener = life.emit('呵呵', '2b');
var biuListener = life.emit('biu', '2b');
var gunListener = life.emit('gun', '2b');

console.log(heheListener, biuListener, gunListener);

console.log(life.listeners('呵呵').length);
console.log(EventEmitter.listenerCount(life, '呵呵'));


