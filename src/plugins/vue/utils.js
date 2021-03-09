import Vue from 'vue'
const utils = {
  // 手机号格式是否正确
  isMobilePhone(value) {
    const reg = /^1\d{10}$/
    if (reg.test(value)) {
      return true
    }
    return false
  }
}

export default {
	install() {
		Vue.prototype.$utils = utils
	}
}