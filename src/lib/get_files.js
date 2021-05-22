async function getFiles(keyword) {

    const drive = await this.createDrive()

    try {
        return await drive.files.list({
            q: `name="${keyword}"`
        })
        
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = getFiles