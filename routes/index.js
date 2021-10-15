var express = require('express');
var router = express.Router();

/* GET Index page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'home'});
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET About us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET Projects page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact us'});
});

module.exports = router;
