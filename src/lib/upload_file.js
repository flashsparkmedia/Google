const TextCleaner = require('text-cleaner')
const fs = require('fs')

async function uploadFile(fileName, filePath) {
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
        throw new BadRequestError(`Error uploading file to Google`, e)
    }

    await this.createPermission(result.data.id)
    return result.data
}

module.exports = uploadFile