const Playlist = require("../../sequelize/models/playlist")

module.exports = async (req, res) => {
    try {
        const playlist = await Playlist?.findAll()
        const response = {
            success: true,
            playlist,
        }
        res.status(200).json(response)
    } catch (error) {
        console.log("error", error)
    }
}
