require('../scss/main.scss');

window.$ = window.jQuery = require('jquery');
require('bootstrap');
require('slick-carousel/slick/slick.min');
require('isotope-layout/dist/isotope.pkgd.min');
require('@fancyapps/fancybox/dist/jquery.fancybox.min');
window.AOS = require('aos');
window.waypoints = require('waypoints/lib/jquery.waypoints');
window.counterUp = require('counterup/jquery.counterup.min');

// custom js
require('./global');