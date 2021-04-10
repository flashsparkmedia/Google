async function verifyUser(idToken) {
    try {
        const googleUser = await this.client.verifyIdToken({
            idToken,
            audience: this.client_id
        })

        return googleUser.getPayload()
    } catch(e) {
        throw new Error(`Error verifying google user: ${e}`)
    }
}

module.exports = verifyUser