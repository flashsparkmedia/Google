function setAccessToken(token) {

    this.accessToken = token

    return setTimeout(() => {
        this.accessToken = null
    }, 30 * 60 * 1000)
}

module.exports = setAccessToken