<template>
    <div>
        <div>{{ msg }}</div>
        <div>{{ content }}</div>
        <br>
        <div>이름 : {{ name }}</div>
        <div>나이 : {{ age }}</div>

        <Detail v-bind:myName="myName"></Detail>
    </div>
</template>

<script>
    import Detail from './Detail.vue'

    export default {
        name: 'Example',
        data () {
            return {
                msg: 'Panel heading without title',
                content: 'panel content',
                myName: 'my name is Jess2'
            }
        },
        props: {
            name: {
                type: String,
                default: 'default name'
            },
            age: {
                type: Number,
                default: 27
            }
        },
        components: {
            Detail
        }
    }
</script>