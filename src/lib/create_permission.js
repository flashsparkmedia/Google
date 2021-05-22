async function createPermission(fileId) {

    const drive = await this.createDrive()

    const resource = {
        role: "reader",
        type: "anyone",
        allowFileDiscovery: "true"
    }

    try {
        const result = await drive.permissions.create({ fileId, resource })
        return result.data
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = createPermission