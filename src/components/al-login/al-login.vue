<style lang="scss">
@import "../../styles/alh";

$tag: "al-login";
$sel: ".al-login";

#{$sel} {
  font-size: 32rpx;
  background-color: #ffffff;
  padding: 30rpx;
  border-radius: 10rpx;

  .form-input-placeholder {
    font-size: 32rpx;
  }

  .al-login__form-item {
    margin-bottom: 20rpx;
    &:last-child {
      margin-bottom: 40rpx;
    }
  }
}
</style>

<template>
  <view class="al-login">
    <evan-form ref="form" :label-style="labelStyle" :model="info">
      <evan-form-item class="al-login__form-item" label="手机号" prop="phone">
        <input class="form-input"
               placeholder-class="form-input-placeholder"
               v-model="info.phone" placeholder="请输入手机号"/>
      </evan-form-item>
      <evan-form-item class="al-login__form-item" label="密码" prop="password">
        <input class="form-input"
               placeholder-class="form-input-placeholder"
               v-model="info.password" placeholder="请输入密码"/>
      </evan-form-item>
    </evan-form>
    <button @click="save" class="evan-form-show__button">登录</button>
  </view>
</template>

<script>
import EvanForm from "@/components/evan-form/evan-form";

export default {
  name: "al-login",
  components: {EvanForm},
  props: {
    mode: {
      type: String
    }
  },
  mounted() {
    // 这里必须放在mounted中，不然h5，支付宝小程序等会找不到this.$refs.form
    this.$refs.form.setRules(this.rules)
  },
  data() {
    return {
      labelStyle: {
      },
      info: {
        phone: '',
        password: '',
      },
      rules: {
        phone: [
          {
            required: true,
            message: '请输入手机号'
          },
          {
            validator: (rule, value, callback) => {
              // 注意这里如果用的是methods里的isMobilePhone将不生效
              if (this.$utils.isMobilePhone(value)) {
                callback()
              } else {
                callback(new Error('手机号格式不正确'))
              }
            }
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            message: '密码不能小于6位'
          }
        ],
      }
    }
  },
  methods: {
    save() {
      this.$refs.form.validate((res) => {
        if (res) {
          uni.showToast({
            title: '验证通过'
          })
        }
      })
    },
  }
}
</script>
