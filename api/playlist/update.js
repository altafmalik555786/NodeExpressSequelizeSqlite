const PlayList = require('../../sequelize/models/playlist')

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        let record = await PlayList.findOne({ where: { id } });
        if (record) {
            const { name } = req.body;
            record.name = name;
            await record.save();
            const payload = {
                success: true,
                message: "Playlist has been updated!",
                playList: record
            }
            res.status(201).json(payload);
        } else {
            const payload = {
                success: false,
                message: "Data not found!"
            }
            return res.status(400).json(payload);
        }
    } catch (error) {
        res.status(400).json(error)
    }
}