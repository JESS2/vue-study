<template>
    <div class="container">
        <h2>Todo List</h2>
        <div class="input-group" style="margin-bottom:10px;">
            <input type="text" class="form-control" placeholder="할일을 입력하세요" v-model="name" v-on:keyup.enter="createTodo(name)">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" v-on:click="createTodo(name)">추가</button>
            </span>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(todo, index) in todos">
                {{ index }} : {{ todo.name }}
                <div class="btn-group pull-right" style="font-size: 12px; line-height: 1;">
                    <button type="button" class="btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        더보기<span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a href="#" v-on:click="deleteTodo(todo)">삭제</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    const url = 'https://todos.garam.xyz/api'
    export default {
        name: 'TodoPage',
        data() {
            return {
                name: null,
                todos: []
            };
        },
        // mounted 는 Vue Component가 페이지에 끼워지고(mounted) 나서 호출되는 함수임
        mounted() {
            console.log('Component mounted')
            this.getTodos()
        },
        methods: {
            // 항목 삭제하기
            deleteTodo (todo) {
                var vm = this
                this.todos.forEach(function (_todo, i, obj) {
                    if (_todo.id === todo.id) {
                        vm.$http.delete(`${url}/todos/${todo.id}`)
                            .then((result) => {
                                obj.splice(i, 1)
                            })
                    }
                })
            },
            // 항목 추가하기
            createTodo (name) {
                if (name != null) {
                    this.$http.defaults.headers.post['Content-Type'] = 'application/json';
                    this.$http.post(`${url}/todos`, {
                        name: name
                    }).then((result) => {
                        this.todos.push(result.data)
                    })
                    this.name = null
                }
            },
            // 전체 목록 가져오기
            getTodos () {
                this.$http.get(`${url}/todos`)
                    .then((result => {
                        this.todos = result.data.data
                    }))
            }
        }
    }
</script>