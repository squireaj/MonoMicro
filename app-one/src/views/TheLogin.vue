<template>
  <form class='loginDiv' v-on:submit.prevent="handleSubmit" method="post">
    <div class='background-image-div' :style="{ backgroundImage: 'url(' + require('@/assets/images/vasion-logo-texture.png') + ')'}">
      <div class='innerLoginDiv'>
        <div class='w100 icon-fill'>
          <VasionWordmark class="vasion-wordmark"/>
        </div>
        <div class='loginSpacer32'></div>
        <div key="login">
          <label class='loginLabelStyle'>USERNAME</label>
          <input
            class='loginTextBox'
            id="username"
            type="text"
            v-model="username"
            placeholder="Username"
            autocomplete="false"
            required />
            <VasionAddCircleIcon />
          <div class='loginSpacer24'></div>
          <label class='loginLabelStyle'>PASSWORD</label>
          <input
            class='loginTextBox'
            id="password"
            type="password"
            v-model="password"
            placeholder="Password"
            autocomplete="false"
            required />
          <div class='loginSpacer24'></div>
          <div class="login-button-div">
            <VasionButton :isFullWidth="true" :is-submit="true" id="login-submit" :classProp="'primary'">
            <span v-if="!isLoading">Sign In</span>
            <div v-else id="loader-box">
              <Loading :active.sync="isLoading" :is-full-page="false" loader="dots" :color="'white'" :background-color="'#ff4702'"></Loading>
            </div>
            </VasionButton>
          <h4 v-if="loginError" id="invalid-password-notification">Invalid Password - Please contact your administrator</h4>
          </div>
        </div>
        <div class='loginSpacer32'></div>
        <div class='loginSpacer24'></div>
        <!--
        <div class='w100'>
          <input class="keep-me-signed-in-checkbox" id="chkKeepMeSignedIn" type="checkbox"><label class='loginLabelStyle'>Keep me signed in</label>
        </div>
        <div class='loginSpacer24'></div>
        <div class='w100'>
          <label id="lblForgotPassword" class='loginLabelStyle vasion-cursor'>Forgot Password?</label>
        </div>
        -->
      </div>
    </div>
  </form>
</template>

<script>
import Loading from 'vue-loading-overlay';
import { loaderBackgroundColor, loaderColor } from '@/assets/js/styleConfig'

export default {
  name: 'TheLogin',
  components: {
    Loading,
  },
  created: function () {
  },
  data: function () {
    return {
      attemptSignIn: true,
      changePasswordError: false,
      confirmPassword: '',
      credentials: { username: '', password: '' },
      isLoading: false,
      loaderBackgroundColor: loaderBackgroundColor,
      loaderColor: loaderColor,
      loginError: false,
      newPassword: '',
      password: '',
      username: '',
      validationError: false,
      validationErrorMessage: '',
    }
  },
  computed: {
    backgroundUrl() {
      // eslint-disable-next-line
      return require('@/assets/images/vasion-logo-texture.png')
    },
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true
      this.loginError = false
      console.log('login creds', this.credentials)
      this.$store.dispatch('login', { username: this.username, password: this.password })
    },
    async routeFromSuccessfulLogin() {
        this.$router.push({ name: 'TheVasionHome' })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~printer-logic-components/src/assets/css/variables.scss';

.background-image-div {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.errorLabelStyle {
  font-family: $font-family-book;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: $red-200;
}

.icon-fill {
  fill: $orange-300;
}

.innerLoginDiv {
  height: 400px;
  width: 85%;
  max-width: 420px;
}
#invalid-password-notification {
  color: red;
  text-align: center;
  font-size: 17px;
}

#loader-box {
  min-height: 36px;
  min-width: 419px;
  z-index: 30;
}

.keep-me-signed-in-checkbox {
  position: relative;
  top: 3px;
  right: 5px;
}

.login-button-div {
  position: relative;
  left: -7px;
  width: 103.5%;
}

.loginDiv {
  width: calc(100vw);
  background-color: #252626;
  height: calc(100vh);
}

.loginSpacer24 {
  height: 24px;
}

.loginSpacer32 {
  height: 32px;
}

.loginSpacer48 {
  height: 48px;
}

.loginTextBox {
  width: 100%;
  color: $grey-300;
  background-color: rgba(0, 0, 0, 0.2);
  border-width: 0px;
  border-radius: 4px;
  height: 40px;
  font-size: 16px;
  padding: 10px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
}

.loginTextBoxError {
  border-width: 1px;
  border-color: red;
}

.loginTopSpacer {
  height: 100px;
}

.loginLabelStyle {
  font-family: Gotham Book;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #aab8c1;
}

.validationErrorMessage {
  color: red;
}

.vasion-wordmark {
  width: 100%;
  position: relative;
  right: 8px;
}

.w100 {
  width: 100%;
  text-align: center;
}

</style>
