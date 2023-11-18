const express = require('express');
const router = express.Router();
const v1BookController = require("../../../controller/Api/v1");

router.post('/',v1BookController.ingestLogs)
router.get('/query',v1BookController.queryLogs)

module.exports = router;