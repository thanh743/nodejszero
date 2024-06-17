const express = require('express')
const router = express.Router()
const {getHomepage,getABC,hoiDanIT} = require('../controllers/homeControllers');


router.get('/', getHomepage)
router.get('/cde', getABC)
router.get('/abc',hoiDanIT )

module.exports = router 