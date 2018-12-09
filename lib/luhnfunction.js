function checkAl (number) {
  var eachD = number.split("");
  var eachEven = [];
  if(eachD.length % 2 === 0) {
    for(var i = (eachD.length - 1); i >= 0; i --) {
      if(i % 2 === 0) {
        var element = eachD[i] * 2;
        eachEven.push(element);
      }
      else {
        eachEven.push(eachD[i]);
      }
    }
  }
  else {
    for(var i = (eachD.length - 1); i >= 0; i --) {
      if(i % 2 === 1) {
        var element = eachD[i] * 2;
        eachEven.push(element);
      }
      else {
        eachEven.push(eachD[i]);
      }
    }
  }



  var eachNover = [];
  for (var j = 0; j < eachEven.length; j ++) {
    if(eachEven[j] > 10) {
      var elementTwo = Math.floor((eachEven[j] / 10)) + (eachEven[j] % 10);
      eachNover.push(elementTwo);
    }
    else {
      eachNover.push(eachEven[j]);
    }
  }

  var sum = 0;
  for (var z = 0; z < eachNover.length; z ++) {
    sum += Number(eachNover[z]);
  }

  var answer = sum % 10;

  if(answer === 0) {
    return "Valid";
  }
  else {
    return "Invalid";
  }

}


module.exports = checkAl;