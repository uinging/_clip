var config = {
	// 打包文件夹路径,后面带'/'
	packFolderPath: 'D:/www/pack-backup/',
	// 打包文件夹名称,前后都不带'/'
	packFolderName: 'kdstock-backup201604201356_test',

	// 源码路径,后面带'/'
	sourcePath: 'D:/www/kdstock-all/',

	// 要打包的文件夹
	// buildFolder: ['admin-qs', 'admin-tg', 'mobile', 'portal'],

	srcPath: [
		// src文件夹路径, 前面不带'/', 后面带'/'

		'admin-tg/css/src/',
		'admin-tg/js/src/',

		'admin-qs/css/src/',
		'admin-qs/js/src/',

		'mobile/css/src/',
		'mobile/js/src/',

		'portal/resource/css/src/',
		'portal/resource/js/src/'

	],

	// 构建的文件类型
	fileType: ['css', 'js']
};

module.exports = config;