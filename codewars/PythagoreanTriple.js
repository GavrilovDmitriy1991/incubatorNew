function isPythagoreanTriple(integers) {
    let a = integers[0];
    let b = integers[1];
    let c = integers[2];
    if (a*a === b*b + c*c){
      return true;
    }
    if (b*b === a*a + c*c){
      return true;
    }
    if (c*c === a*a + b*b){
      return true;
    }
    else{
      return false;
    }