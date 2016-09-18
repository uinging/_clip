(function(){
	var config = {
		// 文件夹名称
		folderName: 'kdstock-backup201609181133',
		// 文件夹路径
		folderPath: 'D:/www/pack-backup/',
		// 要打包的文件夹
		buildFolder: ['admin-qs', 'admin-tg', 'mobile', 'portal'],
		// 构建的文件类型
		fileType: ['css', 'js']
	};

	var path,
		fs = require('fs'),
		buildPath = [];			// 构建文件夹路径

	init();
	function init(){
		path = config.folderPath + config.folderName + '/';
		if(!path || path.indexOf('/') <= -1) {
			console.error('打包文件夹路径格式不对，需要用"/"划分路径');
			return;
		}

		if(!config.buildFolder || !config.buildFolder.length) {
			return console.error('未指定要打包的文件夹, 格式为["admin-qs", "admin-tg", "mobile"]');
		}

		readDir(path);
	}

	// 读取打包文件夹
	function readDir(_path){
		if(!_path) {
			return console.error('未指定打包文件夹路径');
		} 

		console.log('读取文件夹: ' + _path + '\n');

		fs.readdir(_path, function(err, files) {
			if(err) {
				return console.error(err);
			}
			// 列出文件目录
			console.log(files.join('\n'));

			files.forEach(function(file){
				config.buildFolder.forEach(function(folder){
					if(file === folder) {
						// var fileArr = [];
						findSrcFolder( _path, folder);

						// console.log('\n' + folder + ' 中的文件有: \n' + fileArr.join('\n'));
					}
				});
			});

			afterHandle();
		});
	}
	

	// 找到每一个项目文件夹中的src
	function findSrcFolder(_path, folder){
		if(!_path) {
			return console.error('未指定项目文件夹路径');
		}

		folder = folder ? (folder + '/') : '';

		var files = fs.readdirSync(_path + folder);
		files.forEach(function(file){
			config.fileType.forEach(function(type){
				if(file === type) {
					var fileArr = [];
					listFile(fileArr, _path + folder + type + '/src/');
					handleFileList(fileArr, _path, folder, type);
				}
			});
		});
	}

	// 读取单个项目文件夹中要构建的文件列表
	function listFile(fileArr, _path, folder) {
		if(!_path) {
			return console.error('未指定文件夹路径');
		}

		folder = folder ? (folder + '/') : '';

		// console.log('读取单个项目文件夹中要构建的文件列表: ' + _path);

		var files = fs.readdirSync(_path + folder);

		files.forEach(function(file){
			var stats = fs.statSync(_path + folder + file);
			if(stats.isFile()) {
				if(folder) {
					fileArr.push(folder + file);
				} else {
					fileArr.push(file);
				}
			} else if(stats.isDirectory()) {
				listFile(fileArr, _path, folder + file);
			}

		});
	}

	// 对文件列表的处理
	function handleFileList(fileArr, _path, folder, type){
		console.log('\n' + _path + folder + type + ' 中的文件有: \n' + fileArr.join(',\n') + '\n');

		// console.log('_path: ', _path, 'folder: ', folder, 'type: ', type);
		// 处理package.json

		var filePath = __dirname + '/' + folder + type + '/',
			buildFilePath = _path + folder + type + '/';

		// 这里对所有文件夹路径都保存
		// 应该过滤一下空文件夹
		// buildPath 主要用在后来复制dist文件到打包文件夹内, 空文件夹就不用复制了
		// 否则有可能空文件夹没构建,dist里保存的还是上次的旧文件,然后build_copy直接复制了

		if(fileArr.length) {
			buildPath.push([filePath, buildFilePath]);
		}

		console.log('正在读取' + folder + type + '/package-all.json');

		var data = fs.readFileSync(filePath + 'package-all.json');

		// , function(err, data) {
		// 	if(err) {throw new Error(err);}

			console.log(folder + type + '/package-all.json 读取成功');

			// console.log('\npackage.json data:\n\n', JSON.parse(data));
			data = JSON.parse(data);
			// console.log('\n output:\n\n', data.spm.output);

			data.spm.output = fileArr;

			// console.log('\n data: \n\n', JSON.stringify(data));

			console.log('正在写入' + folder + type + '/package.json');

			fs.writeFileSync(filePath + 'package.json', JSON.stringify(data));

			// , function(err){
			// 	if(err) {
			// 		console.error(err);
			// 	}

				console.log(folder + type + '/package.json写入成功');
			// });



		// });

	}

	// 所有操作处理完毕后调用的函数
	function afterHandle(){

		fs.writeFileSync(__dirname + '/build_path', JSON.stringify(buildPath));

		console.log('\n所有 package.json 都已经处理完毕\n\n你可以开始手工构建文件了...\n');
		console.log('文件构建完成以后,再执行 node build_copy.js');

		// var i = 0, 
		// 	len = buildPath.length,
		// 	_index = 0;

		// for(; i <= len - 1; i++) {
		// 	// console.log('buildPath[i][0]', buildPath[i][0]);
		// 	console.log('开始构建 ' + buildPath[i][0]);
		// 	var exec = require('child_process').exec;
		// 	exec('cd ' + buildPath[i][0] + ' & build.bat', function (error, stdout, stderr) {

		// 		if (error) {
		// 			console.error('exec error: ', error);
		// 			return;
		// 		}

		// 		console.log('stderr:', stderr);
		// 		// console.log('stdout:', stdout);

		// 		console.log(buildPath[_index][0] + ' 构建完成');

		// 		if(++_index === len) {
		// 			console.log('全部文件构建完毕!\n');
		// 		} else {
		// 			console.log('正在进行下一项...\n');
		// 		}

				
		// 	});
		// }


		// buildPath.forEach(function(item) {
		// 	console.log('item[0]', item[0]);
		// 	var exec = require('child_process').exec;
		// 	exec('cd ' + item[0] + ' & build.bat', function (error, stdout, stderr) {

		// 		if (error) {
		// 			console.error('exec error: ', error);
		// 			return;
		// 		}
		// 		console.log('stderr:', stderr);
		// 		console.log('stdout:', stdout);


				
		// 	});


		// });

		// console.log('构建文件完毕!');
		
	}

})();