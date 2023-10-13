const { Router } = require('express');
const router = Router();

////// Default Path start_poinnt //////
router.get("/", (req, res) => {
    res.send('This is root! path: "/"')
})
////// Default Path end_point ///////




module.exports = router
