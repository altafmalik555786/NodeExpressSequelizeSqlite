const { Router } = require("express");
const router = Router();
const playListApi = require("../../api/playlist/index");
const { endPoints } = require("../const/index");

router.post(`${endPoints?.playList}`, playListApi.postPlayList);
router.get(`${endPoints?.playList}`, playListApi.getPlayList);
router.get(`${endPoints?.playList}/:id`, playListApi.getSinglePlayList);
router.put(`${endPoints?.playList}/:id`, playListApi.updatePlayList);
router.delete(`${endPoints?.playList}/:id`, playListApi.deletePlayList);

module.exports = router;
