async function moveFile(fileId, previousParent, newParent) {

    const update = {
        addParents: newParent,
        removeParents: previousParent
    }

    try {
        return await this.drive.files.update({ fileId }, { update, fields: '*' })
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = moveFile