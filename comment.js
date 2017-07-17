var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content': '各种期待~',
	'mid': 348
})

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers: {
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4',
		'Cache-Control':'no-cache',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=4462a5cd-3482-4135-84d0-544d82140bf2; imooc_isnew_ct=1468301914; loginstate=1; apsid=Y3NTc1MTExZjNjY2JlZjczNzU1ZGU4OWEzYjUzZDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTIxNDQ0OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6cXAxMzQxOTk4OTU2OEAxNjMuY29tAAAAAAAAAAAAADNiNmJiM2U4NGFmZTZhMDU3ZGNmYWIwNjdlZTRjODkzDgHhVw4B4Vc%3DMG; last_login_username=zqp13419989568%40163.com; PHPSESSID=1eh5j044v5ved0f6gf01mik9s2; jwplayer.qualityLabel=è¶æ¸; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1472795287,1473649239,1474343061,1474421130; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1474421257; IMCDNS=0; imooc_isnew=2; cvde=57e1e1887ed08-10',
		'DNT':'1',
		'Host':'www.imooc.com',
		'Origin':'http':'//www.imooc.com',
		'Pragma':'no-cache',
		'Referer':'http':'//www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(options, function(res){
	console.log('Status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));

	res.on('data', function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})

	res.on('end', function(){
		console.log('评论完毕');
	})
})

req.on('error', function(err){
	console.log('Error: ' + err.message);
})

req.write(postData);
req.end();