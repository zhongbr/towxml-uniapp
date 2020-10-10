# towxml-uniapp
towxml uniapp适配

基于towxml项目的uniapp适配: [项目地址](https://github.com/sbfkcel/towxml)

> 测试支持App、H5和微信小程序平台，其他平台暂未测试

![quicker_f991fc46-a125-44ac-ae3b-ca4f220b3fbd.png](https://i.loli.net/2020/10/10/ik5EHMrpcmwIVP1.png)

## 使用注意事项

main.js中添加如下代码段：
```js
// App端和H5引入需要全局引入Decode组件
// #ifdef APP-PLUS || H5
import Decode from './components/towxml/decode.vue'; // 路径根据实际情况作适当的修改
Vue.component('decode', Decode);
// #endif
```

App.vue中需要引入如下的css:
```css
@import url("@/components/towxml/main.css");
```
经过我的测试，只有在app.vue中引入的css，才可以对动态生成的节点起作用，其他文件中引入的css文件会被uniapp的编译器修改，不能对新产生的节点生效。
