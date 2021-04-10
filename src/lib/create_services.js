const { google } = require('googleapis')

async function createServices() {
    const accessToken = await this.getAccessToken()

    this.client = new google.auth.OAuth2(
        this.client_id,
        this.client_secret,
        this.domain
    );

    const version = 'v3'
    const auth = this.client

    this.drive = google.drive({ version, auth })
    this.analytics = google.analytics({ version, auth })
}

module.exports = createServices