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
        const response = await request(this.refresh_url, refresh_request)
        const body = JSON.parse(response.body)

        if (body.access_token) {
            return body.access_token
        } else {
            console.log(body)
            throw new Error('Error creating Google token.')
        }
    } catch (e) {
        console.log(e)
        throw new Error('Error creating Google token.')
    }
}

module.exports = getAccessToken