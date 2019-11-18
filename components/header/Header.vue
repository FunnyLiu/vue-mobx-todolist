<template>
    <header class="header">
        <h1>todos</h1>
        <Newtodo />
    </header>
</template>


<script>
import Newtodo from './NewTodo'
export default {
    name: 'Header',
    components:{
        Newtodo
    }
}
</script>
