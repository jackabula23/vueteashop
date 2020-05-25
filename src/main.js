// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios'; //主要AJAX套件
import VueAxios from 'vue-axios'; //轉VUE套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import currencyFilter from './filters/currency'; //千分號
import dateFilter from './filters/date'; //日期格式
import VueMoment from 'vue-moment'; //時間過濾器
import VeeValidate from 'vee-validate' // 中文驗證
import zhTW from 'vee-validate/dist/locale/zh_TW' // 中文驗證
import VueI18n from 'vue-i18n' // 中文驗證

import router from './router';
import  './bus';
import Router from 'vue-router';

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueAxios, axios)
Vue.use(VueMoment); //時間過濾器
Vue.use(VueI18n); //中文驗證
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
})

Vue.component('Loading',Loading);
Vue.filter('currency' ,currencyFilter);
Vue.filter('date' ,dateFilter);

axios.defaults.withCredentials = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

//登入驗證
router.beforeEach((to, from, next) => {
  console.log('to', to ,'from',from ,'next',next);
  if(to.meta.requiresAuth){
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
    console.log(response.data);
      if (response.data.success) {
        next();
      }else{
        next({
          path : '/login',
        });
      }
    });
  }else{
    next();
  }
})
