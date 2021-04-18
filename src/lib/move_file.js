async function moveFile(fileId, previousParent, newParent) {
    try {
        await this.drive.files.addParents(newParent)
        await this.drive.files.removeParents(previousParent)
        return
    } catch(e) {
        throw new Error(e)
    }
}

module.exports = moveFile