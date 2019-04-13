var allData;

function setup() {

  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1bskkXMDDIlD-0W6s43xO7uf5RjrkkVC-U4rE9Ah3i0k/edit#gid=0',
    callback: generateIt,
    simpleSheet: true,
    debug: true,
    // orderby: 'votes',
    reverse: true

  });

}

function gotCoolData(stuff, tabletop) {
  allData = stuff;
}

function generateIt(allData) {

  // Move through every row in sheets
  for (var i = 0; i < allData.length; i++) {

    // FIND THE HTML DIVS THAT WILL HOLD THE GOOD OR BAD ANSWERS, ASSIGN TO VARIABLE
    var goodanswers = document.getElementById('al-answers-good');
    var badanswers = document.getElementById('al-answers-bad');

    // IF THIS ROW'S ANSWER WAS GOOD, PUT IN THE GOOD DIV (AND VICE VERSA)
    var holdanswer = createElement('div').addClass('holdtitles');
    if (allData[i].goodbad == 'good') {
      holdanswer.parent(goodanswers);
    } else {
      holdanswer.parent(badanswers);
    }

    var maketimestamp = createElement('p', allData[i].timestamp).addClass('timestamp');
    maketimestamp.parent(holdanswer);
    var makethoughts = createElement('h5', allData[i].thoughts).addClass('thoughts');
    makethoughts.parent(holdanswer);
    var makename = createElement('h5', allData[i].name).addClass('name');
    makename.parent(holdanswer);


  }

  totalvotesall1 = int(allData.length);

}



function draw() {

}
