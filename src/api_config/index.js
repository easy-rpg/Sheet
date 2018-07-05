// URL and endpoint constants
api_url = 'https://sheet-api.herokuapp.com/'

module.exports = {
    api_url: api_url,
    auth_url: api_url + 'auth/',
    refresh_url: api_url +'auth/refresh/',
    register_url: api_url + 'create_user/',
    me_url: api_url + 'user/me/'
}
