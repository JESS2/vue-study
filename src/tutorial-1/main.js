var app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue!',
        name: 'jess2'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'JavaScript', price: 20000 },
            { text: 'Vue', price: 14000 },
            { text: 'React', price: 24000 }
        ]
    }
})

// 새 항목을 추가할 수 있음
app4.todos.push({ text: 'new', price: 3000 });

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: '안녕하세요! Vue.js!!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'hi, jess2!'
    }
})

// test-component 이름을 가진 컴포넌트를 정의함
Vue.component('test-component', {
    template: '<div>this is component test</div>'
})

var test = new Vue({
    el: '#test'
})

// todo-item 이름을 가진 컴포넌트를 정의함
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}, {{ todo.price }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables', price: 200 },
            { id: 1, text: 'Cheese', price: 300 },
            { id: 2, text: 'milk', price: 250 }
        ]
    }
})

// 새 항목을 추가할 수 있음
app7.groceryList.push({ id: 3, text: 'coffee', price: 400 });
app7.groceryList.push({ id: 4, text: 'add', price: 333 });
