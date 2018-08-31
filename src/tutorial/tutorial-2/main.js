// 데이터 객체
var dataObj = { a: 1 }

// Vue 인스턴스에 데이터 객체를 추가
var vm = new Vue({
    data: dataObj
})

// 같은 객체를 참조하기 때문에 true
console.log(vm.a === dataObj.a); // true

// 다른 사용자 정의 속성과 구분하기 위해 $ 접두어를 붙임
console.log(vm.data === dataObj); // false
console.log(vm.$data === dataObj); // true

// 속성 설정은 원본 데이터에도 영향을 미침
vm.a = 2
console.log(dataObj.a); // 2

// 데이터 변경
dataObj.a = 4
console.log(vm.a); // 4

vm.b = 'hello';
console.log(vm.b); // hello
console.log(dataObj.b); // undefined

var obj = {
    foo: 'bar'
}

Object.freeze(obj);

var app0 = new Vue({
    el: '#app',
    data: obj
})

// 다른 사용자 정의 속성과 구분하기 위해 $ 접두어를 붙임
console.log(app0.$el === document.getElementById('app')); // true

// 인스턴스 라이프사이클 훅
// created 훅은 인스턴스가 생성도니 후에 호출됨
var vm1 = new Vue({
    data: {
        a: 1
    },
    created: function() {
        // this는 vm1 인스턴스를 가리킨다
        console.log('a is ' + this.a); // a is 1
    }
})

var app1 = new Vue({
    el: '#app-1',
    data: {
        msg: 'hello?'
    }
})

app1.msg = 'change';

var app2 = new Vue({
    el: '#app-2',
    data: {
        msg: 'hello?'
    }
})

// v-once : 변경되지 않음. app2.msg는 여전히 'hello?'임
app2.msg = 'change';

var app3 = new Vue({
    el: '#app-3',
    data: {
        url: 'https://www.google.com/'
    }
})