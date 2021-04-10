async function destroyFolder(parentFolder) {
    try {
        const result = await this.drive.files.delete({ fileId: parentFolder })
        console.log(result)
        return true
    } catch (e) {
        throw new Error(`Error destorying Google folder: ${e.data}`)
    }
}

module.exports = destroyFolder