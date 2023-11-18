const express = require('express');
const router = express.Router();

router.use('/log-ingestor',require('./logIngestor'));

module.exports = router;