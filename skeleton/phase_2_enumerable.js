
Array.prototype.myeach = function(callback) {

    for(let i =0; i < this.length; i++){
        callback(this[i]);
    }
}

function printElement(ele){
    console.log(ele);
}

console.log([1,2,3,4,5,6,8,9,10].myeach(printElement));


Array.prototype.myMap = function(callback) {
    let map = [];

   this.forEach((el) => map.push(callback(el)));

   return map;

}


function doublecallback(ele){
    return ele*2;
}

console.log([1,2,3,4,5,6,7,8,9].myMap(doublecallback));


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

