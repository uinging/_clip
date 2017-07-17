var http = require('http');
var Promise = require('bluebird');
var cheerio = require('cheerio');
var baseUrl = 'http://www.imooc.com/learn/';
// var url = 'http://www.imooc.com/learn/348';
var videoIds = [637, 348, 259, 197, 134, 75];

function filterChapters(html) {
	var $ = cheerio.load(html);
	var chapters = $('.chapter');
	var title = $('.course-infos h2').text();
	// var number = parseInt($('.js-learn-num').text());

	// course = {
	// 	title: title,
	// 	number: number,
	// 	courseData: [{
	// 		chapterTitle: '',
	// 		videos: [
	// 			title: '',
	// 			id: ''
	// 		]
	// 	}]
	// }


	
	

	var course = {
		title: title,
		// number: number,
		courseData: []
	}




	chapters.each(function(item){
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text().replace(/\s+/g, ' ');
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		}

		videos.each(function(item){
			var video = $(this);
			var videoTitle = video.find('a').clone().children().remove('button').remove('i').end().text().replace(/\s+/g, ' ');
			var id = video.attr('data-media-id');

			chapterData.videos.push({
				title: videoTitle,
				id: id
			})

		})

		course.courseData.push(chapterData);
	})

	return course;

}

function printCourseInfo(course) {

	console.log('\n\n ### ' + course.title + '\n');

	course.courseData.forEach(function(item, index, arr){
		// console.log('### ' + item.title + '\n');

		var chapterTitle = item.chapterTitle;
		console.log(chapterTitle + '\n');
		item.videos.forEach(function(video, index, arr){
			console.log('【' + video.id + '】' + video.title + '\n');
		})
	})



	
}

function getPageAsync(url){
	return new Promise(function(resolve, reject){
		console.log('正在爬取...');

		http.get(url, function(res) {
			var html = '';

			res.on('data', function(data){
				html += data;
			})

			res.on('end', function(){
				resolve(html);
				var course = filterChapters(html);

				// console.log(html);
				printCourseInfo(course);
				// console.log(JSON.stringify(courseData));
			})
		}).on('error', function(err){
			reject(err);
			console.log('获取数据出错');
		});

	})
}

// http.get(url, function(res) {
// 	var html = '';

// 	res.on('data', function(data){
// 		html += data;
// 	})

// 	res.on('end', function(){
// 		var courseData = filterChapters(html);

// 		// console.log(html);
// 		printCourseInfo(courseData);
// 		// console.log(JSON.stringify(courseData));
// 	})
// }).on('error', function(err){
// 	console.log('获取数据出错');
// });


// http.get('http://www.imooc.com/course/AjaxCourseMembers?ids=348', function(res) {
// 	var result = '';

// 	res.on('data', function(data){
// 		result += data;
// 	})

// 	res.on('end', function(){
// 		result = JSON.parse(result);
// 		console.log('result', result);
// 		course.number = result.data[0].numbers;

// 	})
// }).on('error', function(err){
// 	console.log('获取数据出错');
// });



var fetchCourseArray = [];

videoIds.forEach(function(id){
	fetchCourseArray.push(getPageAsync(baseUrl + id));
})

Promise
	.all([fetchCourseArray])
	.then(function(pages){
		var coursesData = [];

		pages.forEach(function(html){
			var course = filterChapters(html);

			coursesData.push(course);
		})

		// coursesData.sort(function(a,b){
		// 	return a.number - b.number;
		// })

		printCourseInfo(coursesData);
	})