var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  results = {
    characters: ["Claudio", "Lars", "Heihachi", "Dragunov"],
    combos: {
      claudio: ["uf", "4", "follow", "f", "3","follow", "f","fh","4","follow","b","3","follow","f","2","follow","b","4","2"]
    }
  }

  res.render('index', { title: 'Express', character: results.characters });
});

module.exports = router;