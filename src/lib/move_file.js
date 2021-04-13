async function moveFile(fileId, previousParent, newParent) {
    try {
        await this.drive.parents.insert({ fileId, id: newParent })
        await this.drive.aprents.delete({ fileId, id: previousParent })
        return
    } catch(e) {
        throw new Error(e)
    }
}

module.exports = moveFile