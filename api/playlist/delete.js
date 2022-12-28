const Playlist = require('../../sequelize/models/playlist')

module.exports = async (req, res) => {
    try {
        let id = req?.params?.id
        let targetData = await Playlist.findOne({ where: { id } });
        if (targetData) {
            Playlist.destroy({
                where: {
                    id
                }
            })
            const payload = {
                success: true,
                message: "Record Deleted Successfully",
                deletedData: targetData
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
        res.status(400).json(error)
    }
}