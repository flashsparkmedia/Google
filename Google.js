const createServices = require('./lib/create_services')
const getAccessToken = require('./lib/get_access_token')
const createFolder = require('./lib/create_folder')
const destroyFolder = require('./lib/destroy_folder')
const createPermission = require('./lib/create_permission')
const uploadFile = require('./lib/upload_file')
const copyFile = require('./lib/copy_file')
const verifyUser = require('./lib/verify_user')

let instance

class Google {
    constructor(options) {
        this.refresh_token = options.refresh_token
        this.client_id = options.client_id
        this.client_secret = options.client_secret
        this.refresh_url = 'https://www.googleapis.com/oauth2/v4/token'
        this.domain = options.domain
        this.drive_temp_upload_folder_id = options.drive_temp_upload_folder_id
    }

    createServices = createServices.bind(this)
    getAccessToken = getAccessToken.bind(this)
    createFolder = createFolder.bind(this)
    destroyFolder = destroyFolder.bind(this)
    createPermission = createPermission.bind(this)
    uploadFile = uploadFile.bind(this)
    copyFile = copyFile.bind(this)
    verifyUser = verifyUser.bind(this)
}

module.exports = options => {
    if (!instance) {
        instance = new Google(options)
    }
    return instance
}