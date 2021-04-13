async function copyFile(fileId, parentFolder) {
    try {
        const result = await this.drive.files.copy({ fileId, parents: [parentFolder], fields: '*' })
        return result
    } catch(e) {
        throw new Error(e)
    }
}

module.exports = copyFile