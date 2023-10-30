const PlayList = require("../../sequelize/models/playlist")
const { MESSAGE_NOT_FOUND, UPDATED_SUCCESSFULLY, DELETED_SUCCESSFULLY, CREATED_SUCCESSFULLY } = require("../../utils/const")
const { returnSuccessResponse, returnFailureResponse, returnCatchedError } = require("../../utils/helper")

const postPlayList = async (req, res) => {
    try {
        const playlist = await PlayList.create({
            name: req?.body?.name
        })
        returnSuccessResponse({ res, data: playlist, message: CREATED_SUCCESSFULLY("Playlist") })
    } catch (error) {
        returnCatchedError({ res, error, at: "postPlayList" })
    }
}

const getPlayList = async (req, res) => {
    try {
        const playlist = await PlayList?.findAll()
        returnSuccessResponse({ res, data: playlist })
    } catch (error) {
        returnCatchedError({ res, error, at: "getPlayList" })
    }
}

const getSinglePlayList = async (req, res) => {
    try {
        const { id } = req?.params
        const playlist = await PlayList?.findByPk(id)
        if (playlist) {
            returnSuccessResponse({ res, data: playlist })
        } else {
            returnFailureResponse({ res, message: MESSAGE_NOT_FOUND })
        }
    } catch (error) {
        returnCatchedError({ res, error, at: "getSinglePlayList " })
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
            returnSuccessResponse({ res, data: record, message: UPDATED_SUCCESSFULLY("Playlist") })
            res.status(200).json(payload);
        } else {
            returnFailureResponse({ res, message: MESSAGE_NOT_FOUND })
        }
    } catch (error) {
        returnCatchedError({ res, error, at: "updatePlayList" })
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
            returnSuccessResponse({ res, data: targetData, message: DELETED_SUCCESSFULLY("Record") })
        } else {
            returnFailureResponse({ res, message: MESSAGE_NOT_FOUND })
        }
    } catch (error) {
        returnCatchedError({ res, error, at: "deletePlayList" })
    }
}

module.exports = {
    postPlayList,
    getPlayList,
    getSinglePlayList,
    deletePlayList,
    updatePlayList
}