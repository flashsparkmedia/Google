async function moveFile(fileId, previousParent, newParent) {

    const drive = await this.createDrive()

    const update = {
        addParents: newParent,
        removeParents: previousParent
    }

    try {
        return await drive.files.update({ fileId }, { update, fields: '*' })
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = moveFile