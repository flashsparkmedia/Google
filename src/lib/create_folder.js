async function createFolder(folderName, parentFolder) {
    
    const resource = {
        name: folderName,
        parents: [parentFolder],
        mimeType: 'application/vnd.google-apps.folder'
    }
    
    try {
        const result = await this.drive.files.create({ resource, fields: '*' })
        return result.data
    } catch(e) {
        throw new Error(e)
    }
}

module.exports = createFolder