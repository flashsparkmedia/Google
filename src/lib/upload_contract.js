const fs = require('fs')

async function uploadContract(fileName, filePath, formsFolder)  {
    let result 

    const resource = {
        name: fileName,
        parents: [formsFolder]
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

module.exports = uploadContract