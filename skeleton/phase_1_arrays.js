Array.prototype.uniq = function() {
  // let new_arr = [];
  // for(let i = 0; i < this.length; i++) {
  //   for(let j = 0; j < this.length; j++) {
  //     if(j != i) {

  //     }
  //   }
  // }
  let count = {};
  for(let i = 0; i < this.length; i++) {
    this[i] in count ? count[this[i]]++ : count[this[i]] = 1;
  }
  return Object.keys(count);
}

console.log([1,2,2,3,3,3].uniq());

Array.prototype.twoSum = function() {
  let index_hash = {};
  let arrPositions = [];

  for(let i = 0; i < this.length; i++) {
    if(-this[i] in index_hash) arrPositions.push([index_hash[-this[i]], i]);
    index_hash[this[i]] = i;

  }
  // console.log(count);
  return arrPositions;
}

console.log([1,-2,2,3,-3].twoSum());


Array.prototype.transpose = function() {

  let transpose = [];
  for(let i = 0; i < this[0].length ; i++ ) {
    let column = [];
    for(let j= 0; j < this.length; j++){
      column.push(this[j][i]);
    }
    transpose.push(column);
  }
  return transpose;
}

console.log([[1,-2],[2,3],[-3,5]].transpose());


