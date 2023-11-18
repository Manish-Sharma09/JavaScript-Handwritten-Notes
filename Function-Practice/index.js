function subjects(Hindi, English, Math, Science, Physical){
 var a = Hindi + English + Math + Science + Physical
  return a;
}

var b = subjects(40,50,60,70,80)
console.log('Total Numbers - ' + b);

function per(b){
  var c = b/500 * 100
  return c;
}
var d = per(b)
console.log('Total Precentage - '+d+'%')