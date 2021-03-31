import Vue from 'vue'
import * as money from './utils/money.js'
import expStorage from '@/lib/expired-storage/index'

import objectPath from 'object-path'

import deepClone from 'clone-deep'

import kebabCase from 'lodash/kebabCase'

let lodash = {
	kebabCase
}

const ObjUtils = {
	getObjByPath(obj, path, defaultVal) {
		if (!obj) {
			return defaultVal
		} else {
			let hasPath = objectPath.has(obj, path)
			if (hasPath) {
				return objectPath.get(obj, path)
			} else {
				return defaultVal
			}
		}
	},
	deepClone
}

const utils = {
	...ObjUtils,
	cachedSystemInfo: null,
	/**
	 * 手机号格式是否正确
	 * @param value
	 * @returns {boolean}
	 */
  isMobilePhone(value) {
    const reg = /^1\d{10}$/
    if (reg.test(value)) {
      return true
    }
    return false
  },
	lodash,
  money,
	/**
	 * rpx to px
	 * @param v
	 * @returns {number}
	 */
	rpx2px(v) {
		let aspect = uni.getSystemInfoSync().windowWidth / 750
		if (aspect > 1) {
			aspect = 1;
		}
		return aspect * v;
	},
	/**
	 * rpx value to px string
	 * @param v
	 * @returns {string|number}
	 */
	calcPx(v) {
  	let z = this.rpx2px(v)
		if (!Number.isNaN(z)) {
			return z + 'px'
		}
		return 0
	},
	/**
	 * 获取viewport top
	 * @param v
	 * @returns {*}
	 */
	getViewportTop(v) {
		return  uni.getSystemInfoSync().windowTop + this.rpx2px(v);
	},
	UTILS_onLaunch() {
  	this.UTILS_cached();
	},
	UTILS_cached() {
		this.cachedSystemInfo = uni.getSystemInfoSync()
	}
}

export default {
	install() {
		Vue.prototype.$utils = utils
		Vue.prototype.$Expire = expStorage.Expire
		Vue.prototype.$expStorage = expStorage
	}
}
