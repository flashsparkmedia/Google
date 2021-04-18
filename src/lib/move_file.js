async function moveFile(fileId, previousParent, newParent) {
    try {
        await this.drive.Parents.insert({ fileId, id: newParent })
        await this.drive.Parents.delete({ fileId, id: previousParent })
        return
    } catch(e) {
        throw new Error(e)
    }
}

module.exports = moveFile