const { google } = require('googleapis')
const TextCleaner = require('text-cleaner')
const fs = require('fs')

async function uploadFile(fileName, filePath) {
    let result 

    const drive = await this.createDrive()

    const resource = {
        name: TextCleaner(fileName).removeChars({ exclude: '.' }).replace(' ', ''),
        parents: [process.env.GOOGLE_DRIVE_TEMP_FOLDER]
    }

    const media = {
        mimeType: 'application/zip, application/octet-stream',
        body: fs.createReadStream(filePath)
    }

    try {
        result = await drive.files.create({ resource, media, fields: '*' })
    } catch (e) {
        throw new Error(e)
    }

    await this.createPermission(result.data.id)
    return result.data
}

module.exports = uploadFile