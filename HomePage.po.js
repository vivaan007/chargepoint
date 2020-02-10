var Homepage = function () {

  var searchField = '#search_field';
  var lnkFindStation = 'a[href*=charge_point]';

  this.open = async function () {
    await browser.maximizeWindow()
    await browser.url('https://cpnos.ev-chargepoint.com/');

  };

  this.clickFindStations = function () {
    $(lnkFindStation).click()
  }

  this.waitForFindPage = function () {
    $(searchField).waitForDisplayed(5000);
  };

  this.typeLocation = function () {
    var List1 = [];
    List = {};
    $(searchField).setValue("Dell Ave")
    $('#searchButton').click()
    browser.pause(8000)
    var List2 = []
    List1 = $$("p.station_name").map(function (element) {
      return element.getAttribute('innerText')
    })
    List2 = $$("p.on_foot").map(function (element) {
      return element.getAttribute('innerText')
    })

    for (var i = 0; i < List1.length; i++) {
      List[i] = {};
      List[i]["name"] = List1[i]
      List[i]["Dist"] = List2[i]
    }

    console.table(List)

    browser.pause(15000)
  }


};
module.exports = new Homepage();