async function getFiles(keyword) {
    try {
        return await this.drive.files.list({
            q: `name="${keyword}"`
        })
        
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = getFiles