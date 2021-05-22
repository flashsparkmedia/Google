const { google } = require('googleapis')

async function createDrive() {
    const access_token = await this.getAccessToken()
    
    this.client = new google.auth.OAuth2(
        this.client_id,
        this.client_secret,
        this.domain
    ); 
    
    this.client.setCredentials({ access_token, refresh_token: this.refresh_token})
    const drive = google.drive({ version: 'v3', auth: this.client })
    return drive
}

module.exports = createDrive