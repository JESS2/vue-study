// 전역 컴포넌트 등록
Vue.component('my-component', {
    template: '<div>사용자 정의 컴포넌트입니다!</div>'
})

// 루트 인스턴스 생성
new Vue({
    el: '#example'
})

var Child = {
    template: '<div>사용자 정의 컴포넌트입니다!!!</div>'
}

// 지역 컴포넌트 등록
new Vue({
    el: '#example-1',
    components: {
        'my-component-1': Child,
        'my-component-2': {
            template: '<div>이것도 사용자 정의 컴포넌트</div>'
        }
    }
})

new Vue({
    el: '#example-2',
    components: {
        'my-row': {
            template: '<tr><td>hi</td><td>hello</td></tr>'
        }
    }
})

Vue.component('my-component-3', {
    template: '\
        <span>{{ message }}</span>\
    ',
    // 아래와 같이 작성하면 에러남
    // data: {
    //     message: 'hello'
    // }
    data: function () {
        return {
            message: 'hello'
        }
    }
})

new Vue({
    el: '#example-3'
})

var data = { counter: 0 }
Vue.component('simple-counter', {
    template: '\
        <button v-on:click="counter += 1">{{ counter }}</button>\
    ',
    data: function () {
        return data
    }
})

Vue.component('simple-counter-1', {
    template: '\
        <button v-on:click="counter += 1">{{ counter }}</button>\
    ',
    data: function () {
        return {
            counter: 0
        }
    }
})

new Vue({
    el: '#example-4'
})

// props
new Vue({
    el: '#example-5',
    components: {
        'child-component': {
            // props 정의
            props: ['message', 'age'],
            template: '\
                <div>\
                    <span>{{ age }}</span>\
                    <span>{{ message }}</span>\
                </div>\
            '
        }
    }
})

new Vue({
    el: '#example-6',
    components: {
        'child-component': {
            // props 정의
            props: ['myMessage'],
            template: '\
                <div>\
                    <span>{{ myMessage }}</span>\
                </div>\
            '
        }
    }
})

new Vue({
    el: '#example-7',
    data: {
        parentMsg: ''
    },
    components: {
        'child-component': {
            // props 정의
            props: ['myMessage'],
            template: '\
                <div>\
                    <span>{{ myMessage }}</span>\
                </div>\
            '
        }
    }
})

new Vue({
    el: '#example-8',
    data: {
        todo: {
            text: 'hello',
            isComplete: false,
            age: 34
        }
    },
    components: {
        'todo-item': {
            props: ['text', 'isComplete', 'age'],
            template: '\
                <div>\
                    <span>{{ text }}</span>\
                    <span>{{ isComplete }}</span>\
                    <span>{{ age }}</span>\
                </div>\
            '
        }
    }
})

new Vue({
    el: '#example-9',
    components: {
        'comp': {
            props: ['someProp'],
            template: '<span>{{ someProp }}의 타입은 {{ typeof someProp }}입니다.</span>'
        }
    }
})

new Vue({
    el: '#example-10',
    data: {
        counter: 'test'
    },
    components: {
        'simple-component': {
            // props 정의
            props: ['initialCounter'],
            data: function () {
                return {
                    counter: this.initialCounter
                }
            },
            template: '<span>{{ initialCounter }}</span>'
        }
    }
})