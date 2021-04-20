const createServices = require('./src/lib/create_services')
const getAccessToken = require('./src/lib/get_access_token')
const createFolder = require('./src/lib/create_folder')
const destroyFolder = require('./src/lib/destroy_folder')
const createPermission = require('./src/lib/create_permission')
const uploadFile = require('./src/lib/upload_file')
const copyFile = require('./src/lib/copy_file')
const moveFile = require('./src/lib/move_file')
const verifyUser = require('./src/lib/verify_user')

let instance

class Google {
    constructor(options) {
        this.refresh_token = options.refresh_token
        this.client_id = options.client_id
        this.client_secret = options.client_secret
        this.refresh_url = 'https://www.googleapis.com/oauth2/v4/token'
        this.domain = options.domain
        this.root_upload_folder_id = options.root_upload_folder_id
        this.createServices()
    }

    createServices = createServices.bind(this)
    getAccessToken = getAccessToken.bind(this)
    createFolder = createFolder.bind(this)
    destroyFolder = destroyFolder.bind(this)
    createPermission = createPermission.bind(this)
    uploadFile = uploadFile.bind(this)
    uploadContract = uploadContract.bind(this)
    copyFile = copyFile.bind(this)
    verifyUser = verifyUser.bind(this)
    moveFile = moveFile.bind(this)
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