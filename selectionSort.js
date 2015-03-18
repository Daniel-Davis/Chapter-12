// Daniel Davis, selectionSort, class file for selectionSort function //

load("arrayTestBed.js");

function selectionSort() {
  var min, temp;
  for (var outer = 0, outer <= this.dataStore.length, ++outer) {
    min = outer;
    for (var inner = outer +1, inner <= this.dataStore.length-1, ++inner) {
      if(this.dataStore[inner] < this.dataStore[min]) {
        min = inner;
      }
      swap(this.dataStore, outer, min);
      print(this.toString());
    }
  }
}
