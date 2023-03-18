// IMPORT EXPRESS SERVER
const express = require('express');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

router.get('/search', (req, res) => {
    res.send('<html><body><h1>INSIDE GET SEARCH METHOD..THIS IS SEARCH API..</h1></body></html>');
});

// DELETE RECORD/Document
router.delete('/deluser', (req, res) => {
    res.send('<h3>INSIDE DELETE METHOD..THIS IS DELETE API..</h3>');
});


//SHOULD BE EXPORTED
module.exports = router;