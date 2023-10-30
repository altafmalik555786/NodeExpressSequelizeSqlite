const PlayList = require("../../sequelize/models/playlist")
const { MESSAGE_NOT_FOUND, UPDATED_SUCCESSFULLY, DELETED_SUCCESSFULLY, CREATED_SUCCESSFULLY } = require("../../utils/const")
const { failureResponse, handleCatchedError, successResponse } = require("../../utils/helper")

const postPlayList = async (req, res) => {
    try {
        const playlist = await PlayList.create({
            name: req?.body?.name
        })
        const response = successResponse({ data: playlist, message: CREATED_SUCCESSFULLY("Playlist") })
        res.status(200).send(response)
    } catch (error) {
        handleCatchedError({ at: "postPlayList", error })
        res.json(error)
    }
}

const getPlayList = async (req, res) => {
    try {
        const playlist = await PlayList?.findAll()
        const payload = successResponse({ data: playlist })
        res.status(200).json(payload)
    } catch (error) {
        handleCatchedError({ error, at: "getPlayList" })
        res.status(400).json(error)
    }
}

const getSinglePlayList = async (req, res) => {
    try {
        const { id } = req?.params
        const playlist = await PlayList?.findByPk(id)
        if (playlist) {
            const payload = successResponse({ data: playlist })
            res.status(200).json(payload)
        } else {
            const payload = failureResponse({ message: MESSAGE_NOT_FOUND })
            res.status(400).json(payload)
        }
    } catch (error) {
        handleCatchedError({ at: "getSinglePlayList ", error })
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
            const payload = successResponse({ data: record, message: UPDATED_SUCCESSFULLY("Playlist") })
            res.status(200).json(payload);
        } else {
            const payload = failureResponse({ message: MESSAGE_NOT_FOUND })
            return res.status(400).json(payload);
        }
    } catch (error) {
        handleCatchedError({ at: "updatePlayList", error })
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
            const payload = successResponse({ data: targetData, message: DELETED_SUCCESSFULLY("Record")})
            res.status(200).json(payload)
        } else {
            const payload = failureResponse({ message: MESSAGE_NOT_FOUND })
            res.status(400).json(payload)
        }
    } catch (error) {
        handleCatchedError({ at: "deletePlayList", error })
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