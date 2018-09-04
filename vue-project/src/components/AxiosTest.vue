<template>
    <div id="app">
        <div>
            <button class="btn btn-primary" v-on:click="searchTerm">글 불러오기</button>
            <button class="btn btn-primary" v-on:click="getTodo">할일 불러오기</button>
        </div>
        <div v-if="hasPost">
            <div v-for="post in posts" v-bind:key="post.id">
                <h1>{{ post.title }}</h1>
                <p>{{ post.body }}</p>
            </div>
        </div>
        <ul v-if="hasTodo">
            <li v-for="todo in todos" v-bind:key="todo.id">
                <span>{{ todo.completed ? "O" : "X" }} - </span>{{ todo.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    const url = 'https://jsonplaceholder.typicode.com'
    export default {
        name: 'app',
        data: function () {
            return {
                posts: [],
                todos: []
            }
        },
        computed: {
            hasPost () {
                return this.posts.length > 0
            },
            hasTodo () {
                return this.todos.length > 0
            }
        },
        methods: {
            // 모든 post 불러오기
            searchTerm () {
                this.todos = []
                // using JSONPlaceholder
                this.$http.get(`${url}/posts`)
                    .then((result) => {
                        this.posts = result.data
                    })
            },
            // 모든 todo 불러오기
            getTodo () {
                this.posts = []
                this.$http.get(`${url}/todos`)
                    .then((result) => {
                        this.todos = result.data
                    })
            }
        }
    }
</script>