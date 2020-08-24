function Set() {
    var collection = [];

    this.values = function(){
        return collection;
    };
  
    this.has = function(element){
      if(collection.indexOf(element) !== -1){
        return true;
      }
      return false;
    };
  
    this.add = function(element){
      if(!this.has(element)){
        collection.push(element);
        return true;
      }
      return false;
    };

    this.remove = function(element){
      if(this.has(element)){
        let index = collection.indexOf(element);
        collection.splice(index,1);
        return true;
      }
      return false;
    };

    this.union = function(collectionTwo){
        let unionSet = new Set();
        let firstSet = collection;
        let secondSet = collectionTwo.values();
        firstSet.forEach((element) => {unionSet.add(element)});
        secondSet.forEach((element) => {unionSet.add(element)});
        return unionSet;
    };

    this.intersection = function(collectionTwo){
        let intersectionSet = new Set();
        let firstSet = collection;
        firstSet.forEach((element) => {
            if(collectionTwo.has(element)){
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    };

    this.difference = function(collectionTwo){
        let differenceSet = new Set();
        let firstSet = collection;
        firstSet.forEach((element) => {
            if(!collectionTwo.has(element)){
                differenceSet.add(element);
            }
        });
        return differenceSet;
    };

    this.subset = function(collectionTwo){
        let firstSet = collection;
        return firstSet.every((element) => {
           return collectionTwo.has(element)
        });
    };

    this.size = function(){
      return collection.length;
    };
  }


  let set1 = new Set();
  let set2 = new Set();
  set1.add(1);
  set1.add(2);
  set1.add(3);
  set1.add(4);

  // set2.add(1);
  // set2.add(2);
  // set2.add(3);
  set2.add(4);
  set2.add(5);
  set2.add(6);
  set2.add(7);

  console.log(set1.values());
  console.log(set2.values());

  console.log(set1.union(set2).values());
  console.log(set1.intersection(set2).values());
  console.log(set1.difference(set2).values());
  console.log(set1.subset(set2));

  console.log(set1.size());
  