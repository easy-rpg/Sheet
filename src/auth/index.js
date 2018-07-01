import axios from 'axios'

// URL and endpoint constants
const API_URL = 'https://sheet-api.herokuapp.com/'
const LOGIN_URL = API_URL + 'auth/'
const SIGNUP_URL = API_URL + 'user/'

export default {
    // Send a request to the login URL and save the returned JWT
    login: function (context,creds, redirect) {
        context.$http.post(LOGIN_URL, creds).then(function (response) {
            if (response.status === 200) {
                context.$session.destroy()
                context.$session.start()
                context.$session.set('jwt', response.data.token)
                axios.defaults.headers.common['Authorization'] = 'JWT ' + response.data.token
            }
            return context.$http
        }, function (err) {
            console.log('err', err)
        }).then(function (){
            context.$http.get(API_URL+'user/token/').then(function (response) {
                if (response.status === 200) {
                    context.$session.set('username', response.data.username)
                    context.$session.set('id_user', response.data.id)
                }
                // Redirect to a specified route
                if(redirect) {
                    context.$router.push(redirect)
                }
            }, function (err) {
                console.log('err', err)
            }).then(function (){
                console.log({'id_user': context.$session.get('id_user'), 'username': context.$session.get('username'), 'jwt': context.$session.get('jwt')})
            })
        })
    },

    signup(context, creds, redirect) {
        context.$http.post(SIGNUP_URL, creds, (data) => {
            localStorage.setItem('id_token', data.id_token)
            localStorage.setItem('access_token', data.access_token)

            this.user.authenticated = true

            if(redirect) {
                router.go(redirect)
            }

        }).error((err) => {
            context.error = err
        })
    }
}
