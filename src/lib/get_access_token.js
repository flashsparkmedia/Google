const axios = require('axios')

async function getAccessToken() {
    
    const post_body = `grant_type=refresh_token&client_id=${encodeURIComponent(this.client_id)}&client_secret=${encodeURIComponent(this.client_secret)}&refresh_token=${encodeURIComponent(this.refresh_token)}`

    const refresh_request = {
        data: post_body,
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    try {
        const response = await axios(this.refresh_url, refresh_request)

        if (response.data.access_token) {
            return response.data.access_token
        } else {
            console.log(response.data)
            throw new Error('Error creating Google token.')
        }
    } catch (e) {
        console.log(e.response)
        throw new Error('Error creating Google token.')
    }
}

module.exports = getAccessToken