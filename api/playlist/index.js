const PlayList = require("../../sequelize/models/playlist")


const postPlayList = async (req, res) => {
    try {
        const playlist = await PlayList.create({
            name: req?.body?.name
        })
        const response = {
            success: true,
            playlist,
        }
        res.status(200).send(response)
    } catch (error) {
        console.log('postPlayList catch error',  error)
        res.json(error)
    }
}

const getPlayList = async (req, res) => {
    try {
        const playlist = await PlayList?.findAll()
        const payload = {
            success: true,
            playlist,
        }
        console.log("================= endPoints?.playList", req, res)

        res.status(200).json(payload)
    } catch (error) {
        console.log('getPlayList catch error',  error)
        res.status(400).json(error)
    }
}

const getSinglePlayList = async (req, res) => {
    try {
        const { id } = req?.params
        const playlist = await PlayList?.findByPk(id)
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
        console.log('getSinglePlayList catch error',  error)
        res?.json(error)
    }
}

const updatePlayList = async (req, res) => {
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
        console.log('updatePlayList catch error',  error)
        res.status(400).json(error)
    }
}

const deletePlayList = async (req, res) => {
    try {
        let id = req?.params?.id
        let targetData = await PlayList.findOne({ where: { id } });
        if (targetData) {
            PlayList.destroy({
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
        console.log('deletePlayList catch error',  error)
        res.status(400).json(error)
    }
}

module.exports = {
    postPlayList,
    getPlayList,
    getSinglePlayList,
    deletePlayList,
    updatePlayList
}