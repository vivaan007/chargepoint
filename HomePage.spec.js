var Homepage = require('./Homepage.po.js');
//import Homepage from './Homepage.po.js'
describe('Suite: homepage', function() {
  it('should open Library Page', function() {
    Homepage.open();
  })
  it('Find stations', function() {
    Homepage.clickFindStations();
    Homepage.waitForFindPage();
    Homepage.typeLocation();
  })
})