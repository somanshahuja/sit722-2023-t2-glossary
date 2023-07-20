var express = require('express');
var router = express.Router();

const namesList = [
  {'id':'1', 'term' : 'John', 'desc' : 'john@gmail.com', 'ref' : 'abc' },
  {'id':'2', 'term' : 'Sam' , 'desc' : 'sam@gmail.com', 'ref' : 'abc'},
  {'id':'3', 'term' : 'Jack' , 'desc' : 'jack@gmail.com', 'ref' : 'abc'},
  
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sit722', sub:'DevOps' , names: namesList});
});

module.exports = router;
