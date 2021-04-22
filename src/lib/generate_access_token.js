const axios = require('axios')

async function generateAccessToken() {

    const accessToken = this.getAccessToken()
    if (accessToken !== null) {
        console.log('token already established')
        return accessToken
    }
    
    try {
        const response = await axios({
            url: this.refresh_url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: `grant_type=refresh_token&client_id=${encodeURIComponent(this.client_id)}&client_secret=${encodeURIComponent(this.client_secret)}&refresh_token=${encodeURIComponent(this.refresh_token)}`
        })

        this.setAccessToken(response.data.access_token)
        setTimeout(() => this.setAccessToken(null), 45 * 60 * 1000)
        return response.data.access_token
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = generateAccessToken