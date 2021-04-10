async function createFolder(folderName, parentFolder) {

    await this.createServices() 
    
    const resource = {
        name: folderName,
        parents: [parentFolder],
        mimeType: 'application/vnd.google-apps.folder'
    }
    
    try {
        const result = await this.drive.files.create({ resource, fields: '*' })
        return result.data
    } catch(e) {
        throw new Error(`Error creating folder: ${e.data}`)
    }
}

module.exports = createFolder