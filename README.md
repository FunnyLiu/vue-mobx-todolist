# vue-mobx-todolist

基于vue和mobx的todolist。

在store中统一管理数据，不再需要一层层的事件通信。

事件通信版本可以参考：[vue-todolist](https://github.com/FunnyLiu/vue-todolist)。

这里连接vue和mobx，用到了[mobx-vue](https://github.com/mobxjs/mobx-vue)。

其核心原理：

从传入的函数中拿到数据，手动创建新组件，继承自vue组件，拦截生命周期的$mount和$destroy，建立与mobx的联系。

详细参考：[mobx-vue源码分析](https://github.com/FunnyLiu/mobx-vue/tree/readsource)