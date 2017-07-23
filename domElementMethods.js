// var div = document.createElement('input');
var div = document;
var proto = div.__proto__;
var layer = 0;
var prop = {};

while(proto) {
	// let keys = Reflect.ownKeys(proto);
	let symbolName = proto[Symbol.toStringTag];
	let name = symbolName || 'object';

	prop[layer + '_' + name] = Reflect.ownKeys(proto).sort(function(a, b) {
		if(typeof a == 'string' && typeof b == 'string') {
			return a >= b ? 1 : -1;
		} else {
			if(typeof a != 'string') {
				return -1;
			} else {
				return 1;
			}
		}
	});

	layer += 1;
	proto = proto.__proto__;
}

console.log(JSON.stringify(prop));
