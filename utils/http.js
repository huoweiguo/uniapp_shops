const BASE_URL = 'http://api.jianghukeji.com'

// 请求方法封装
const request = (options) => {
	// let token = ''
	// uni.getStorage({
	// 	key: 'accessToken',
	// 	success: function(res) {
	// 		console.log(res?.data, 'token 9');
	// 		token = res?.data || '';
	// 	}
	// })
	// 默认配置
	const defaultOptions = {
		url: '', // 请求地址
		method: 'GET', // 请求方法
		data: {}, // 请求参数
		header: {
			'Content-Type': 'application/json', // 默认请求头
			'tenant-id': '1',
			'Authorization': uni.getStorageSync('accessToken')
		},
	};

	// 合并配置
	const finalOptions = {
		...defaultOptions,
		...options
	};

	// 返回 Promise
	return new Promise((resolve, reject) => {
		uni.request({
			...finalOptions,
			url: BASE_URL + finalOptions.url, // 拼接完整 URL
			success: (res) => {
				if (res.statusCode === 200) {
					resolve(res.data); // 请求成功，返回数据
				} else {
					reject(res); // 请求失败，返回错误信息
				}
			},
			fail: (err) => {
				reject(err); // 网络错误或其他异常
			},
		});
	});
};

export default request;