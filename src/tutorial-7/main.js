var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})

var example = new Vue({
    el: '#example',
    data: {
        counter: 0
    },
    methods: {
        addFunction: function () {
            this.counter++;
        },
        subFunction: function () {
            this.counter--;
        }
    }
})

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function (event) {
            alert('hello ' + this.name + '!');
            if (event) {
                console.log(event);
                alert(event.target.tagName);
            }
        }
    }
})

new Vue({
    el: '#example-3',
    methods: {
        say: function (msg) {
            alert(msg);
        },
        warn: function (msg, event) {
            if (event) event.preventDefault();
            alert(msg);
            console.log(event);
        }
    }
})

var example4 = new Vue({
    el: '#example-4',
    methods: {
        clickFunc: function (event) {
            if (event) event.preventDefault();
            alert(event.target.tagName);
        }
    }
})

var example5 = new Vue({
    el: '#example-5',
    methods: {
        submit: function () {
            console.log('submit successed');
        }
    }
})
