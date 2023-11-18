function sub(hindi, eng, math) {//this is for total numbers functions
  var a = hindi + eng + math
  return a;
};

var b = sub(20, 40, 60)
console.log('Total Marks '+ b);

function per(tp) {//this is for total percentage functions
  var c = tp/300 * 100
  return c;
};
var d = per(b);
console.log('Total Percentage '+ d + '%')