const Playlist = require("../../sequelize/models/playlist")

module.exports = async (req, res) => {
    try {
        const playlist = await Playlist.create({
            name: req?.body?.name
        })
        const response = {
            success: true,
            playlist,
        }
        res.status(200).send(response)
    } catch (error) {
        console.log("error", error)
    }
}