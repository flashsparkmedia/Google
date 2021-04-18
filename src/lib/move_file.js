async function moveFile(fileId, previousParent, newParent) {

    const resource = { fileId }

    const update = {
        addParents: newParent,
        removeParents: previousParent
    }

    try {
        return await this.drive.files.update({ resource, update, fields: '*' })
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = moveFile