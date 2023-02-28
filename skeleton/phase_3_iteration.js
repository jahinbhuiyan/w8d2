Array.prototype.bubbleSort = function() {
  let copy = this.slice();
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for(let i = 0; i < copy.length - 1; i++) {
      if (copy[i] >= copy[i+1]) {
        [copy[i], copy[i+1]] = [copy[i+1], copy[i]];
        sorted = false;
      }
    }
  }
  return copy;
}

console.log([2,6,3,5,9,1,0].bubbleSort());

String.prototype.subString = function() {
  let subString = [];
  
      for(let i = 0 ; i < this.length; i++) {
          // console.log(this[i],i)
          for (let j=i+1; j <= this.length; j++ ){
              // console.log(this[j],j)
              subString.push(this.slice(i,j));   // slicing doesn't include "j", so we have to go one index beyond j to get j
          }
      }
      return subString
  }
  
  console.log("cat".subString());