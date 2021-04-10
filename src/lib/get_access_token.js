const axios = require('axios')

async function getAccessToken() {
    
    try {
        const response = await axios({
            url: this.refresh_url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: `grant_type=refresh_token&client_id=${encodeURIComponent(this.client_id)}&client_secret=${encodeURIComponent(this.client_secret)}&refresh_token=${encodeURIComponent(this.refresh_token)}`
        })

        return response.data.access_token
    } catch (e) {
        throw new Error(`Error requsting access token: ${e.response.data.error}`)
    }
}

module.exports = getAccessToken