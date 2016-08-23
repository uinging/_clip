var checkBrowser = {
	browser : navigator.appName,
	version : navigator.appVersion.split(";")[1].replace(/[ ]/g,""),
	checkVersion: '',
	lowIE: false
};

if(checkBrowser.browser == "Microsoft Internet Explorer" && checkBrowser.version == "MSIE6.0") { 
	checkBrowser.checkVersion = 'IE6';
} else if(checkBrowser.browser == "Microsoft Internet Explorer" && checkBrowser.version == "MSIE7.0") { 
	checkBrowser.checkVersion = 'IE7';
} else if(checkBrowser.browser == "Microsoft Internet Explorer" && checkBrowser.version == "MSIE8.0") { 
	checkBrowser.checkVersion = 'IE8';
} else if(checkBrowser.browser == "Microsoft Internet Explorer" && checkBrowser.version == "MSIE9.0") { 
	checkBrowser.checkVersion = 'IE9';
}

if(checkBrowser.checkVersion == "IE6" || checkBrowser.checkVersion == "IE7" || checkBrowser.checkVersion == "IE8") {
	checkBrowser.lowIE = true;
}

alert(checkBrowser.checkVersion);
alert(checkBrowser.lowIE);