async function copyFile() {
    try {
        const result = await this.drive.files.copy({ fileId, parents: [parentFolder], fields: '*' })
        return result
    } catch(e) {
        throw new Error(`Error copying client file to Google Drive: ${e.data}`)
    }
}

module.exports = copyFile