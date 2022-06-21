const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.used(require('./partyRoutes'));

module.exports = router;