import axios from 'axios'

// URL and endpoint constants
const API_URL = 'https://sheet-api.herokuapp.com/'
const AUTH_URL = API_URL + 'auth/'
const REGISTER_URL = API_URL + 'create_user/'

export default {
    // Send a request to the login URL and save the returned JWT
    login: function (context,creds, redirect) {
        context.$http.post(AUTH_URL, creds).then(function (response) {
            if (response.status === 200) {
                context.$session.destroy()
                context.$session.start()
                context.$session.set('jwt', response.data.token)
                axios.defaults.headers.common['Authorization'] = 'JWT ' + response.data.token
            }
            return context.$http
        }, function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log({'data': error.response.data, 'status': error.response.status, 'headers': error.response.headers})
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log({'request': error.request})
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log({'Error': error.message})
            }
            console.log({'config': error.config});
        }).then(function (){
            context.$http.get(API_URL+'user/me/').then(function (response) {
                if (response.status === 200) {
                    context.$session.set('username', response.data.username)
                    context.$session.set('id_user', response.data.id)
                }
                // Redirect to a specified route
                if(redirect) {
                    context.$router.push(redirect)
                }
                return context.$http
            }, function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log({'data': error.response.data, 'status': error.response.status, 'headers': error.response.headers})
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log({'request': error.request})
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log({'Error': error.message})
                }
                console.log({'config': error.config});
            }).then(function (){
                // console.log({'id_user': context.$session.get('id_user'), 'username': context.$session.get('username'), 'jwt': context.$session.get('jwt')})
                return context.$http
            })
        })
    },

    register(context, creds, redirect) {
        context.$http.post(REGISTER_URL, creds).then(function (response) {
            console.log(response)
            if (response.status === 200) {
                context.$session.destroy()
                context.$session.start()
                context.$session.set('username', response.data.username)
                context.$session.set('id_user', response.data.id_user)
            }
            return context.$http
        }, function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log({'data': error.response.data, 'status': error.response.status, 'headers': error.response.headers})
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log({'request': error.request})
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log({'Error': error.message})
            }
            console.log({'config': error.config});
        }).then(function (){
            context.$http.post(AUTH_URL, {'username': creds.username, 'password': creds.password}).then(function (response) {
                if (response.status === 200) {
                    context.$session.set('jwt', response.data.token)
                    axios.defaults.headers.common['Authorization'] = 'JWT ' + response.data.token
                }
                // Redirect to a specified route
                if(redirect) {
                    context.$router.push(redirect)
                }
                return context.$http
            }, function (err) {
                console.log('err', err)
            }).then(function (){
                +
                console.log({'id_user': context.$session.get('id_user'), 'username': context.$session.get('username'), 'jwt': context.$session.get('jwt')})
                return context.$http
            })
        }
    }
}
