'use strict';

// Read chart horizontally, storing into a state variable, instead of splitting
// the data into sections then bars.
//
// This is due to some problems / inconsistencies in the chart syntax that span
// across bars and sections, including:
// - section names sometimes declared before or after the barline, or not at all
// - repeat signs, including first and second houses, coda, segno etc
// - some naming inconsistencies, eg "x" vs "Kcl", or "LZ" vs "|"
//
// To demonstrate, some examples of chart beginnings include:
// "{*A" (Beautiful Love)
// "*A{" (Afternoon in Paris)
// "T44[*" (Armando's Rhumba)
// "[" (500 Miles High)

var state = {

  // Time Signature: assume 4/4 if not stated (some charts have no time sig)
  "TS": {
    "n": 4, // not stored
    "d": 4, // stored
  },

  // Previous Chord: memory for repeating chords
  "chord": "",
}

module.exports = function(data){

  var ret = [];

  // console.log(data);

  // // use this to debug (find charts containing particular string):
  // var find_charts_containing = "";
  // if (data.indexOf(find_charts_containing) !== -1) {
  //   console.log("Raw data:",data);
  // }

  // DATA PREPROCESSING:
  data = data.replace(/XyQ|alt|[UY]/g, "");
  data = data.replace(/\,|l/g," "); // replacing "l" will also replace on "Kcl"
  data = data.replace(/LZ/g,"|"); // this will also allow split on "Z"

  // DATA SPLITTING:
  data = data.split(/(\{|\}|\[|\]|\||\s|T\d\d|\*\w|N\d|Z|Kc|x|<.*?>|Q|S)/);
  for (var i=0; i<data.length; i++) {
    var d = data[i].replace(/\s/g,"");
    if (d=="") {
      continue;
    } else {

      // // use this to debug (find split strings that do not match pattern)
      // // see this godly thread: https://stackoverflow.com/questions/406230/regular-expression-to-match-a-line-that-doesnt-contain-a-word
      // if (/^((?!\{|\}|\[|\]|\||\s|T\d\d|\*\w|N\d|Z|Kc|x|<.*?>|[A-G]+|Q|S|n|s+|f+|r).)*$/g.test(d)) {
      //   console.log(d);
      // }

    }
  }

  return ret;
}