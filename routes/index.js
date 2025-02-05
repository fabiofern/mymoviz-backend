var express = require("express");
var router = express.Router();

module.exports = router;

router.get("/movies", (req, res) => {
    fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`
    )
        .then((response) => response.json())
        .then((apiData) => {
            res.json({ movies: apiData.results });
        });
});
