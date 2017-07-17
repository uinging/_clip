var fs = require('fs');

fs.readFile(__dirname + '/build_path', function(err, data){
	if(err) {
		console.error(err);

		if(err.errno == -4058) {
			console.error('\n没有 build_path 文件, 你需要先运行 node build_package.js, 然后手工构建,然后再运行此文件\n');
		}
	}

	var buildPath = JSON.parse(data);

	var len = buildPath.length,
		_index = 0;

	var exec = require('child_process').exec;

	console.log('\n从\n' + buildPath[0][0] + '\n到\n' + buildPath[0][1] + '\n开始复制...\n');

	buildPath.forEach(function(item){
		item[0] = item[0].replace(/\//g, '\\');
		item[1] = item[1].replace(/\//g, '\\');

		var type = item[0].slice(-4);
		var sourceFolder = '',
			targetFolder = '';

		if(type.includes('css')) {
			sourceFolder = 'dist';		// 源文件夹最后不加反斜杠
			targetFolder = 'dist\\';	// 目标文件夹最后加上反斜杠
		} else if(type.includes('js')) {
			sourceFolder = 'dist';
			targetFolder = 'sea-modules\\compress\\1.0.0\\';
		}

		sourceFolder = item[0] + sourceFolder;
		targetFolder = item[1] + targetFolder;

		// 先清空目标文件夹,再复制文件
		exec('rmdir /s/q ' + targetFolder + ' & xcopy ' + sourceFolder + ' ' + targetFolder + ' /s/y' , function (error, stdout, stderr) {

			if (error) {
				return console.error('exec error: ', error);
			}

			console.log('stderr:', stderr);
			console.log('stdout:', stdout);

			console.log('\n从\n' + buildPath[_index][0] + '\n到\n' + buildPath[_index][1] + '\n文件复制完毕.\n\n\n------我是文件夹分割线------\n');
			// console.log(buildPath[_index][0] + ' 文件复制完毕.\n');

			if(++_index === len) {

				// 删掉 buildPath
				fs.unlink(__dirname + '/build_path', function(err){
					if(err) {
						return console.error(err);
					}

					console.log('build_path 文件已删除');
				});

				console.log('全部文件复制完毕!可以手工打包了.\n');

			} else {
				console.log('\n从\n' + buildPath[_index][0] + '\n到\n' + buildPath[_index][1] + '\n开始复制...\n');
			}
			
		});
	});
	
});