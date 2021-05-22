async function createFolder(folderName, parentFolder) {

    const drive = await this.createDrive()
    
    const resource = {
        name: folderName,
        parents: [parentFolder],
        mimeType: 'application/vnd.google-apps.folder'
    }
    
    try {
        const result = await drive.files.create({ resource, fields: '*' })
        return result.data
    } catch(e) {
        throw new Error(e)
    }
}

module.exports = createFolder