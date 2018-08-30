// 클래스 동적 바인딩
{/* <div class="static active">hello</div> */}
// 아래에서 hasError: true로 하면,
{/* <div class="static active text-danger">hello</div> */}
var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello',
        isActive: true,
        hasError: false
    }
})

// app.hasError = true;

// 아래에서 isActive: true로 하면 글자색 변경됨
var app2 = new Vue({
    el: '#app-2',
    data: {
        msg: 'world',
        isActive: false
    }
})

app2.isActive = true;

// 계산된 속성에도 바인딩 할 수 있음
var app3 = new Vue({
    el: '#app-3',
    data: {
        msg: 'jess2',
        isActive: true,
        error: null
    },
    computed: {
        classObject: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})

// 배열을 v-bind:class에 전달하여 클래스 목록을 지정할 수 있음
var app4 = new Vue({
    el: '#app-4',
    data: {
        msg: 'array',
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})

// 목록에 있는 클래스를 조건부 토글하려면 삼항 연산자를 이용할 수 있음
var app5 = new Vue({
    el: '#app-5',
    data: {
        msg: 'test',
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})

// 배열 구문 내에서 객체 구문을 사용할 수 있음
var app6 = new Vue({
    el: '#app-6',
    data: {
        msg: 'test2',
        isActive: true,
        errorClass: 'text-danger'
    }
})

// 사용자 정의 컴포넌트로 class 속성을 사용
{/* <p class="foo bar baz boo">hi~~~</p> */}
{/* <p class="foo bar active">hi~~~</p> */}
Vue.component('my-component', {
    template: '<p class="foo bar">hi~~~</p>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        isActive: true
    }
})

// 인라인 스타일 바인딩
var app8 = new Vue({
    el: '#app-8',
    data: {
        msg: 'style change',
        activeColor: 'orange',
        fontSize: 30
    }
})

// 스타일 객체에 직접 바인딩
var app9 = new Vue({
    el: '#app-9',
    data: {
        msg: 'style object change',
        styleObj: {
            color: 'orange',
            fontSize: '30px'
        }
    }
})

// 배열구문으로 여러 개의 스타일 객체를 사용
var app10 = new Vue({
    el: '#app-10',
    data: {
        msg: 'style array change',
        baseStyles: {
            color: 'red',
            fontSize: '20px'
        },
        overridingStyles: {
            fontSize: '50px'
        }
    }
})