const { google } = require('googleapis')

const getAccessToken = require('./src/lib/get_access_token')
const createFolder = require('./src/lib/create_folder')
const destroyFolder = require('./src/lib/destroy_folder')
const createPermission = require('./src/lib/create_permission')
const uploadFile = require('./src/lib/upload_file')
const uploadContract = require('./src/lib/upload_contract')
const copyFile = require('./src/lib/copy_file')
const moveFile = require('./src/lib/move_file')
const verifyUser = require('./src/lib/verify_user')
const getFiles = require('./src/lib/get_files')

let instance

class Google {
    constructor(options) {
        this.refresh_token = options.refresh_token
        this.client_id = options.client_id
        this.client_secret = options.client_secret
        this.refresh_url = 'https://www.googleapis.com/oauth2/v4/token'
        this.domain = options.domain
        this.root_upload_folder_id = options.root_upload_folder_id
        this.accessToken = null

        this.client = new google.auth.OAuth2(
          this.client_id,
          this.client_secret,
          this.domain
        );

        this.init()
    }

    init = async () => {

      console.log('ran')
      const accessToken = await this.getAccessToken()

      console.log(accessToken)

      this.client.setCredentials({ access_token: this.accessToken, refresh_token: this.refresh_token})
      const version = 'v3'
      const auth = this.client

      this.drive = google.drive({ version, auth })
      // this.analytics = google.analytics({ version, auth })
      setInterval(this.getAccessToken, 1800000)
    }

    getAccessToken = getAccessToken.bind(this)
    createFolder = createFolder.bind(this)
    destroyFolder = destroyFolder.bind(this)
    createPermission = createPermission.bind(this)
    uploadFile = uploadFile.bind(this)
    uploadContract = uploadContract.bind(this)
    copyFile = copyFile.bind(this)
    verifyUser = verifyUser.bind(this)
    moveFile = moveFile.bind(this)
    getFiles = getFiles.bind(this)
}

module.exports = {
    getInstance(options) {
      if (!instance) {
        // only the first call to getInstance will use these options to create an instance
        instance = new Google(options);
      } 
      return instance;
    }
  }