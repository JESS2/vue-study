const message = 'hello world';

// 전역 컴포넌트 등록
Vue.component('simpleComponent1', {
    template: '<div>this is component1</div>'
})

// 컴포넌트를 변수로 받아서 지역 컴포넌트로 등록
const simpleComponent2 = {
    template: '<div>this is component2</div>'
}

var data = {
    test: 1
}

var obj = {
    foo: 'bar'
}

// 기존 속성이 변경되는 것을 막아 반응성 시스템이 추적할 수 없게함
Object.freeze(obj);

var app = new Vue({
    el: '#app',
    data: {
        message: message,
        message2: message,
        message3: '',
        name: 'Jess2',
        title: 'this is title',
        seen: true,
        obj: obj,
        data: data,
        simpleData: 1,
        changeMessage: 'vue.js',
        url: 'https://www.google.com/',
        books: [
            { name: 'vue', price: 20000 },
            { name: 'react', price: 10000 }
        ],
        lists: [
            'apple',
            'banana',
            'orange'
        ],
        groceryLists: [
            { id: 0, text: 'vegetables', price: 200 },
            { id: 1, text: 'cheese', price: 300 },
            { id: 2, text: 'milk', price: 240 }
        ],
        simpleLists: [
            { id: 0, name: 'jessie' },
            { id: 1, name: 'ellie' },
            { id: 2, name: 'j_ust'}
        ],
        generalMessage: 'maxst is the best',
        firstName: 'Jessie',
        lastName: 'Jung'
    },
    computed: {
        reversedMessage() {
            return this.generalMessage.split('').reverse().join('')
        },
        now() {
            return Date.now()
        },
        fullName() {
            return this.firstName + ' ' + this.lastName
        },
        fullName2: {
            get() {
                return this.firstName + ' ' + this.lastName
            },
            set(newVal) {
                var names = newVal.split(' ')
                this.firstName = names[0]
                this.lastName = names[1] 
            }
        }
    },
    // created 훅은 인스턴스가 생성된 후에 호출됨
    created: function () {
        // this는 app 인스턴스임
        console.log('this.simpleData is ' + this.simpleData);
    },
    methods: {
        reverse() {
            this.message2 = this.message2.split('').reverse().join('')
        },
        methodCallMessage() {
            return this.generalMessage.split('').reverse().join('')
        }
    },
    components: {
        simpleComponent2,
        simpleComponent3: {
            props: ['deliver'],
            template: '<div>{{ deliver }}</div>'
        },
        simpleComponent4: {
            props: ['fruits'],
            template: `
                <li>{{ fruits }}</li>
            `
        },
        simpleComponent5: {
            props: ['todo'],
            template: `
                <li>{{ todo.id }} : {{ todo.text }} : {{ todo.price }}</li>
            `
        },
        simpleComponent6: {
            props: ['simple', 'key'],
            template: '\
                <li>{{ key }} : {{ simple.name }}</li>\
            '
        }
    }
})

app.books.push({ name: 'angular', price: 25000 });
app.simpleLists.push({ id: 3, name: 'jung' });

// 같은 객체를 참조하기 때문에 true
console.log(app.data.test === data.test); // true

// 속성 설정은 원본 데이터에도 영향을 미침
app.data.test = 2;
console.log(data.test); // 2

// 데이터 변경
data.test = 3;
console.log(app.data.test); // 3

console.log(app.$data.data == data); // true

app.data.test2 = 'hello';
console.log(app.data.test2); // hello
console.log(data.test2); // hello

data.test3 = 'world';
console.log(data.test3); // world
console.log(app.data.test3); // world


console.log(app.$data.data == data); // true

// 다른 사용자 정의 속성과 구분하기 위해 $ 접두어를 붙임
console.log(app.$el === document.getElementById('app')); // true

// v-once : 재할당 되지 않음
app.changeMessage = 'react';

// setter 설정 안함
app.fullName = 'Ellie Ko';
console.log(app.fullName); // Jessie Jung

// setter 설정
app.fullName2 = 'Ellie Ko';
console.log(app.fullName2); // Ellie Ko