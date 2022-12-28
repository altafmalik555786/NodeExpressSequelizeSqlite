const Playlist = require("../../sequelize/models/playlist")

module.exports = async (req, res) => {
    try {
        const playlist = await Playlist?.findAll()
        const payload = {
            success: true,
            playlist,
        }
        res.status(200).json(payload)
    } catch (error) {
        res.status(400).json(error)
    }
}
