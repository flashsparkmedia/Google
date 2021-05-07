async function destroyFolder(parentFolder) {
    try {
        const result = await this.drive.files.delete({ fileId: parentFolder })
        return true
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = destroyFolder