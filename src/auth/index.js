const api_config = require('@/api_config');
// console.log({'vars': api_config})

export default {
    // Send a request to the login URL and save the returned JWT
    login: function (context,creds, redirect) {
        context.$http.post(api_config.auth, creds)
        .then(function (response) {
            // console.log({'request': 'POST AUTH_URL','response': response})
            if (response.status === 200) {
                context.$session.destroy()
                context.$session.start()
                context.$session.set('jwt', response.data.access)
                context.$session.set('jwt-refresh', response.data.refresh)
                // console.log({'id_user': context.$session.get('id'), 'username': context.$session.get('username'), 'jwt': context.$session.get('jwt'), 'jwt-refresh': context.$session.get('jwt-refresh')})
                context.$http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access
            }
        })
        .catch(function (error) {
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
        })
        .then(function (){
            context.$http.get(api_config.user_me)
            .then(function (response) {
                if (response.status === 200) {
                    context.$session.set('username', response.data.username)
                    context.$session.set('id', response.data.id)
                }
                // Redirect to a specified route
                if(redirect) {
                    context.$router.push(redirect)
                }
            })
            .catch(function (error) {
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
            })
            .then(function (){
                // console.log({'id_user': context.$session.get('id'), 'username': context.$session.get('username'), 'jwt': context.$session.get('jwt'), 'jwt-refresh': context.$session.get('jwt-refresh')})
            })
        })
    },

    register(context, creds, redirect) {
        context.$http.post(api_config.register, creds)
        .then(function (response) {
            console.log(response)
            if (response.status === 200) {
                context.$session.destroy()
                context.$session.start()
                context.$session.set('username', response.data.username)
                context.$session.set('id', response.data.id_user)
            }
        })
        .catch(function (error) {
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
        })
        .then(function (){
            context.$http.post(api_config.auth, {
                'username': creds.username,
                'password': creds.password
            })
            .then(function (response) {
                if (response.status === 200) {
                    context.$session.set('jwt', response.data.access)
                    context.$session.set('jwt-refresh', response.data.refresh)
                    context.$http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access
                }
                // Redirect to a specified route
                if(redirect) {
                    context.$router.push(redirect)
                }
            })
            .catch(function (error) {
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
            })
            .then(function (){
                // console.log({'id_user': context.$session.get('id'), 'username': context.$session.get('username'), 'jwt': context.$session.get('jwt'), 'jwt-refresh': context.$session.get('jwt-refresh')})
            })
        })
    }
}
