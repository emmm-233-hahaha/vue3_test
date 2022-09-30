// 不再引入Vue构造函数--import { createApp } from 'vue';
// 而是名为createApp的构造函数
// 构造函数要通过new关键字调用
// 工厂函数可以直接调用不必new关键字
import { createApp } from 'vue'

import App from './App.vue' // 引入所有组件的父组件


createApp(App).mount('#app')// 创建应用实例对象并挂载
