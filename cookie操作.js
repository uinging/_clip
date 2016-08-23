// 列出所有cookie, 字符串形式
document.cookie;

// 新增/修改 cookie
function setCookie(name, value, days){
	if(!name) {
		return console.log('name 与 value 是必需的');
	}

	var exdate = '';

	if(days) {
		exdate = new Date( (new Date()).getTime() + days * 24 * 3600 );
	}

	var expires = days ? ";expires=" + exdate.toGMTString() : "";

	document.cookie = name + '=' + encodeURIComponent(value) + expires;

	console.log(document.cookie);
}

// 获取指定cookie
function getCookie(name){
	var _allCookie = document.cookie.split(/;\s+/g),
		allCookie = {};

	// console.log('_allCookie', _allCookie);

	if(_allCookie.length) {
		for(var i = 0, len = _allCookie.length; i < len; i++) {
			var arr = _allCookie[i].split('=');
			// console.log('_allCookie[i]', _allCookie[i],'arr', arr);
			if(arr.length) {
				allCookie[arr[0]] = decodeURIComponent(arr[1]);
			} else {
				console.error('格式错误!');
			}
		}

	} else {
		return "";
	}

	if(name) {
		return allCookie[name];
	} else {
		return allCookie;
	}
}

// 清除指定cookie
function clearCookie(name) {
	if(!name) {
		return "未指定 cookie name";
	}

    setCookie(name, "", -1);  
} 