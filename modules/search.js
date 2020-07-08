const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/search/:query/:type', (req, res) => {
    const{query, type} = req.params;

    fetch(`https://itunes.apple.com/search?term=${query}&entity=${type}&limit=15`)
        .then(res => res.json())
        .then(data => res.send(data.results))
        .catch(err => console.log(err))

})

module.exports = router
