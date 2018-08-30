var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

example1.items.push({ message: 'new' });

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

// 새로운 항목 추가 가능, index가 자동으로 올라감
example2.items.push({ message: 'new' });

// 객체의 속성을 반복할 수 있음
var example3 = new Vue({
    el: '#example-3',
    data: {
        object: {
            firstName: 'Jessie',
            lastName: 'Jung',
            age: 27
        }
    }
})

var example4 = new Vue({
    el: '#example-4',
    data: {
        object: [{
            firstName: 'Jessie',
            lastName: 'Jung',
            age: 27
        }, {
            firstName: 'Ellie',
            lastName: 'Ko',
            age: 27
        }]
    }
})

var example5 = new Vue({
    el: '#example-5',
    data: {
        items: [
            { id: 0, msg: 'hi' },
            { id: 1, msg: 'my name is' },
            { id: 2, msg: 'jessie' }
        ]
    }
})

var example6 = new Vue({
    el: '#example-6',
    data: {
        userProfile: {
            name: 'jessie'
        }
    }
})

// 반응형 속성 추가 가능
Vue.set(example6.userProfile, 'lastName', 'Jung');

example6.$set(example6.userProfile, 'test', 'test');

example6.userProfile = Object.assign({}, example6.userProfile, {
    age: 27,
    favoriteColor: 'Vue Green'
})

var example7 = new Vue({
    el: '#example-7',
    data: {
        numbers: [ 1, 2, 3, 4, 5 ]
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
})

var example8 = new Vue({
    el: '#example-8',
    data: {
        items: [
            { msg: 'jessie' },
            { msg: 'ellie' }
        ]
    }
})

var example9 = new Vue({
    el: '#example-9',
    data: {
        todos: [
            { isComplete: false, name: 'jessie'},
            { isComplete: false, name: 'ellie'},
            { isComplete: true, name: 'john'},
            { isComplete: false, name: 'eddy'}
        ]
    }
})

var example10 = new Vue({
    el: '#example-10',
    data: {
        todos: [
            { isComplete: false, name: 'jessie'},
            { isComplete: false, name: 'ellie'},
            { isComplete: true, name: 'john'},
            { isComplete: false, name: 'eddy'}
        ]
    }
})

Vue.component('todo-item', {
    template: '\
        <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">X</button>\
        </li>\
    ',
    props: ['title']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})