const { Router } = require('express');
const router = Router();
const playListApi = require('../api/playlist/index')

////// Default Path start_poinnt //////
router.get("/", (req, res) => {
    res.send('This is root! path: "/"')
})
////// Default Path end_point ///////


/////////////// Playlist_API playlist start_point //////////////////
router.post(`${playListApi.basePath}`, playListApi.postPlayList)
router.get(`${playListApi.basePath}`, playListApi.getPlayList)
router.get(`${playListApi.basePath}/:id`, playListApi.getSinglePlayList)
router.put(`${playListApi.basePath}/:id`, playListApi.updatePlayList)
router.delete(`${playListApi.basePath}/:id`, playListApi.deletePlayList)
/////////////// Playlist_API playlist end_point //////////////////




module.exports = router
