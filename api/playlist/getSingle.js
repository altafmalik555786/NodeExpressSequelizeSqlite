const Playlist = require("../../sequelize/models/playlist")

module.exports = async (req, res) => {
    try {
        const { id } = req?.params
        const playlist = await Playlist?.findByPk(id)
        if (playlist) {
            const payload = {
                success: true,
                playlist,
            }
            res.status(200).json(payload)
        } else {
            const payload = {
                success: false,
                message: "Record not found"
            }
            res.status(400).json(payload)   
        }
    } catch (error) {
        res?.json(error)
    }
}
