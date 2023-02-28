
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

