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