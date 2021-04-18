async function moveFile(fileId, previousParent, newParent) {
    try {
        await this.drive.Files.addParents([newParent])
        await this.drive.Files.removeParents([previousParent])
        return
    } catch(e) {
        throw new Error(e)
    }
}

module.exports = moveFile