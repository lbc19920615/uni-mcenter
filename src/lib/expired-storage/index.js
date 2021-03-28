// const Wechat = typeof wx === 'undefined' ? {} : wx;
// const LocalStorage = typeof window === 'undefined' ? {} : ((window.localStorage) || {});

import { localStorage } from "mp-storage";

/**
 * 过期单位
 * */
const EXPIRE_UNIT = {
	SECOND: 0,
	MINUTE: 1,
	HOUR: 2,
	DAY: 3,
	MONTH: 4
};

/**
 * 过期实例
 * */
class Expire {
	/**
	 * @param amount 数量
	 * @param unit 单位 @see EXPIRE_UNIT
	 * */
	constructor(amount, unit) {
		let offset = Math.max(1, parseFloat(amount));
		switch (unit || EXPIRE_UNIT.SECOND) {
			case EXPIRE_UNIT.MINUTE:
				offset *= 60;
				break;
			case EXPIRE_UNIT.HOUR:
				offset *= 3600;
				break;
			case EXPIRE_UNIT.DAY:
				offset *= 86400;
				break;
			case EXPIRE_UNIT.MONTH:
				offset *= 2592000;
				break;
		}
		this.expireDate = Date.now() + offset * 1000;
	}
}

/**
 * Storage
 */
class Storage {
	constructor() {
		this.EXPIRE_UNIT = EXPIRE_UNIT;
		this.Expire = Expire;
		// const supportWechatMiniProgram = typeof Wechat.getStorageSync === 'function' && typeof Wechat.setStorageSync === 'function' && typeof Wechat.removeStorageSync === 'function';
		this.set = function(key, data, expire) {
			expire = expire || new this.Expire(30, this.EXPIRE_UNIT.DAY);
			const value = JSON.stringify({
				data,
				expire: expire.expireDate
			});
			return localStorage["setItem"](key, value);
			// return supportWechatMiniProgram ? Wechat['setStorageSync'](key, value) : LocalStorage['setItem'](key, value);
		};

		this.get = function(key) {
			// const value = supportWechatMiniProgram ? Wechat['getStorageSync'](key) : LocalStorage['getItem'](key);
			const value = localStorage["getItem"](key);
			const _package = JSON.parse(value || "{}");
			if (Date.now() < _package.expire) {
				return _package.data;
			}
			this.remove(key);
			return null;
		};

		this.remove = function(key) {
			return localStorage["removeItem"](key);
			// return supportWechatMiniProgram ? Wechat['removeStorageSync'](key) : LocalStorage['removeItem'](key);
		};
	}
}

export default new Storage();
