import axios from 'axios-miniprogram'
import {showToast} from "@/utils/msg";
import { getRequestLogger } from "@/utils/logger";
import store from "@/store/index";

const logger = getRequestLogger();

const REQUEST_ERR_MSG = '网络错误';

function Message(message, type) {
	showToast(message, {
		icon: 'none'
	})
}

function showReloginModal(res = {}) {
	return new Promise((resolve, reject) => {
		uni.showModal({
			title: '提示',
			content: '你已被登出，可以取消继续留在该页面，或者重新登录',
			confirmText: '重新登录',
			cancelText: '取消',
			success(modelRes) {
				if (modelRes.confirm) {
					// console.log('用户点击确定');
					logger.info('用户点击确定');
					resolve()
				} else if (modelRes.cancel) {
					// console.log('用户点击取消');
					logger.warn('用户点击取消');
					reject(new Error('user cancel modal'))
				}
			},
			fail(e) {
				logger.error(e);
				reject(new Error('user reject modal'));
			}
		});
	})
}


// 创建axios实例
const service = axios.create({
  // baseURL: '/admin_api/v1', // api的base_url
  baseURL: 'http://api.kaoyango.com/mock/230',
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // if (store.getters.token) {
    // config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 20000) {
			Message(res.msg || REQUEST_ERR_MSG);

			// 50015  access_token不合法
			// 50021: access_token过期,
			// 50022: access_token失效,
			if (res.code === 61000 || res.code === 50021 || res.code === 50022) {
				showReloginModal(res)
					.then(() => store.dispatch('FedLogOut'))
					.then(() => {
						if (res.code === 50021) {
							// location.reload()
						} else if (res.code === 61000) {
							// redirectToOA()
						} else {
							// router.push('/login')
						}
					})
			}

      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
		Message(error.message);
    return Promise.reject(error)
  }
)

export default service
