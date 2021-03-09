<template>
	<view>
		<!-- {{model.phone}} -->
		<evan-form ref="form" v-model="model">
			<evan-form-item prop="phone">
				<input type="text" v-model="model.phone">
			</evan-form-item>
			<button @click="submit">submit</button>
		</evan-form>
	</view>
</template>

<script>
	import evanForm from '@/components/evan-form/evan-form.vue'
	import evanFormItem from '@/components/evan-form-item/evan-form-item.vue'
	
	export default {
		components: {
			evanForm,
			evanFormItem,
		},
		data() {
			return {
				model: {
					phone: ""
				},
				rules: {
					phone: [{
						required: true,
						message: '请输入手机号'
					},
					// {
					// 	validator: (rule, value, callback) => {
					// 		// 注意这里如果用的是methods里的isMobilePhone将不生效
					// 		if (this.$utils.isMobilePhone(value)) {
					// 			callback()
					// 		} else {
					// 			callback(new Error('手机号格式不正确'))
					// 		}
					// 	}
					// },
				]	
				},
			};
		},
		mounted() {
		    ﻿// 这里必须放在mounted中，不然h5，支付宝小程序等会找不到this.$refs.form
		    this.$nextTick(() => {
				// console.log(this.$refs.form)
				if (this.$refs.form) {
					this.$refs.form.setRules(this.rules)
				}
		    })
		},
		methods: {
			isMobilePhone(rule,value,callback){
				// if (this.$utils.isMobilePhone(value)) {
				// 	callback()
				// } else {
				// 	callback(new Error('手机号格式不正确'))
				// }
			},
			submit() {
				this.$refs.form.validate((isError) => {
					console.log(isError)
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
