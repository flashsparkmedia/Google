const TextCleaner = require('text-cleaner')
const fs = require('fs')
const generateAccessToken = require('./generate_access_token')

async function uploadFile(fileName, filePath, retry=false) {
    let result 

    const resource = {
        name: TextCleaner(fileName).removeChars({ exclude: '.' }).replace(' ', ''),
        parents: [process.env.GOOGLE_DRIVE_TEMP_FOLDER]
    }

    const media = {
        mimeType: 'application/zip, application/octet-stream',
        body: fs.createReadStream(filePath)
    }

    try {
        result = await this.drive.files.create({ resource, media, fields: '*' })
    } catch (e) {
        throw new Error(e)
    }

    await this.createPermission(result.data.id)
    return result.data
}

module.exports = uploadFile