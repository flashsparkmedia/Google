async function createPermission(fileId) {

    const resource = {
        role: "reader",
        type: "anyone",
        allowFileDiscovery: "true"
    }

    try {
        const result = await this.drive.permissions.create({ fileId, resource })
        return result.data
    } catch (e) {
        throw new Error(`Error creating file permission: ${e.data}`)
    }
}

module.exports = createPermission