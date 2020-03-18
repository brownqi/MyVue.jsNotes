/*
vue的插件
 */
(function () {
    //需要向外暴漏的插件对象
    const MyPlugin = {}
    //插件对象必须有一个install()方法
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            console.log('Vue.myGlobalMethod')
        }

        // 2. 添加全局资源
        Vue.directive('my-directive',function (el,binding) {
            el.textContent = binding.value.toUpperCase()
        })


        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {
            console.log('$myMethod')
        }
    };
    //向外暴露
    window.MyPlugin = MyPlugin
})()
