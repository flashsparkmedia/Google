async function destroyFolder(parentFolder) {

    const drive = await this.createDrive()

    try {
        const result = await drive.files.delete({ fileId: parentFolder })
        return true
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = destroyFolder