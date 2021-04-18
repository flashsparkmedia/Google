async function moveFile(fileId, previousParent, newParent) {

    const update = {
        fileId,
        addParents: newParent,
        removeParents: previousParent
    }

    try {
        return await this.drive.files.update({ update, fields: '*' })
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = moveFile