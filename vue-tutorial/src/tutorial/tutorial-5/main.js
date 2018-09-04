var app = new Vue({
    el: '#app',
    data: {
        ok: false
    }
})

var app1 = new Vue({
    el: '#app-1',
    data: {
        type: 'B'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        loginType: 'username'
    },
    methods: {
        change: function() {
            if(this.loginType == 'username')
                this.loginType = 'email';
            else
                this.loginType = 'username';
        }
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        ok: true
    }
})