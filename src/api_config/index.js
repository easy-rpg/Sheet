// URL and endpoint constants
API_URL = 'https://sheet-api.herokuapp.com/'

module.exports = {
    api_url: API_URL,
    auth_url: API_URL + 'auth/',
    refresh_url: API_URL +'auth/refresh/',
    register_url: API_URL + 'create_user/',
    me_url: API_URL + 'user/me/',
    edit_user_url: API_URL + 'user/',
}
