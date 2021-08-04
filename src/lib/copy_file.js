async function copyFile(fileId, parentFolder) {
    const drive = await this.createDrive()
    
    try {
        const result = await drive.files.copy({ fileId, requestBody: { parents: [parentFolder] }, fields: '*' })
        return result
    } catch(e) {
        throw new Error(e)
    }
}

module.exports = copyFile