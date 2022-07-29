import Vue from 'vue';
import axios from './router/axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router/router';
import './permission'; // 权限
import './error'; // 日志
import './cache';//页面缓存
import store from './store';
import {loadStyle} from './util/util'
import * as urls from '@/config/env';
import Element from 'element-ui';
import {
  iconfontUrl,
  iconfontVersion
} from '@/config/env';
import i18n from './lang'; // Internationalization
import './styles/common.scss';
import basicBlock from './components/basic-block/main';
import basicContainer from './components/basic-container/main';
import thirdRegister from './components/third-register/main';
import avueUeditor from 'avue-plugin-ueditor';
import website from '@/config/website';
import crudCommon from '@/mixins/crud';
import scroll from 'vue-seamless-scroll'
import moment from "moment"



// 业务组件
import tenantPackage from './views/system/tenantpackage';

import  './asssets/font/iconfont.css' 

Vue.prototype.$moment = moment
Vue.prototype.$axios = axios
/* axios.defaults.baseURL="http://192.168.16.204:18089/bladex"; */
axios.defaults.baseURL=" ";

const echarts =require('echarts')
Vue.prototype.$echarts = echarts


// 注册全局crud驱动
window.$crudCommon = crudCommon;
// 加载Vue拓展
Vue.use(router);
Vue.use(scroll)
Vue.use(VueAxios, axios);
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value),
  size: 'small', zIndex: 3000 
},);
Vue.use(window.AVUE, {
  size: 'small',
  tableSize: 'small',
  calcHeight: 65,
  i18n: (key, value) => i18n.t(key, value)
});


// 注册全局容器
Vue.component('basicContainer', basicContainer);
Vue.component('basicBlock', basicBlock);
Vue.component('thirdRegister', thirdRegister);
Vue.component('avueUeditor', avueUeditor);
Vue.component('tenantPackage', tenantPackage);
// 加载相关url地址
Object.keys(urls).forEach(key => {
  Vue.prototype[key] = urls[key];
});
// 加载website
Vue.prototype.website = website;




// 动态加载阿里云字体库
iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrl.replace('$key', ele));
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');




