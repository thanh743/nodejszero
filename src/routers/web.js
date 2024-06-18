const express = require('express')
const router = express.Router()
const {getHomepage,getABC,hoiDanIT,postCreateUser,getCreateUser} = require('../controllers/homeControllers');


router.get('/', getHomepage)
router.get('/cde', getABC)
router.get('/abc',hoiDanIT )
router.get('/create-user',getCreateUser)

router.post('/create-user',postCreateUser)
module.exports = router 