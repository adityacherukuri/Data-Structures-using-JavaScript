var Map = function() {
    let collection = {};
    let count = 0;

    this.size = function(){
        return count;
    };

    this.add = function(key,value){
        collection[key] = value;
        count++;
    };

    this.has = function(key){
        return(key in collection);
    };

    this.get = function(key){
        return(key in collection) ? collection[key] : "Key not found";
    };
  
    this.remove = function(key){
        if(key in collection){
            delete collection[key];
            count--;
        } else {
            return "Key not found";
        }
    };
  
    this.values = function(){
      let mapValues = new Array();
      for(let key of Object.keys(collection)){
          mapValues.push(collection[key]);
      }
      return mapValues.length > 0 ? mapValues : "No elements found";
    };
  
    this.clear = function(){
        collection = {};
        count = 0;
    };
  };

let map1 = new Map();
map1.add('Students', 100);
map1.add('Assist prof', 10);
map1.add('Prof', 10);


console.log(map1.get('Students'));
console.log(map1.get('Staff'));
console.log(map1.has('Teachers'));
console.log(map1.has('Prof'));
console.log(map1.has('Staff'));
console.log(map1.size());
console.log(map1.values());
map1.clear();
console.log(map1.values());

