const { google } = require('googleapis')

async function createServices() {
    const accessToken = await this.getAccessToken()
    console.log(accessToken )

    this.client = new google.auth.OAuth2(
        this.client_id,
        this.client_secret,
        this.domain
    );

    this.client.setCredentials({ access_token: accessToken, refresh_token: this.refresh_token})

    const version = 'v3'
    const auth = this.client

    this.drive = google.drive({ version, auth })
    this.analytics = google.analytics({ version, auth })
}

module.exports = createServices