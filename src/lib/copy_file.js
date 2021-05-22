async function copyFile(fileId, parentFolder, retry = false) {
    const drive = await this.createDrive()
    
    try {
        const result = await drive.files.copy({ fileId, parents: [parentFolder], fields: '*' })
        return result
    } catch(e) {
        throw new Error(e)
    }
}

module.exports = copyFile