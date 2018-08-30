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