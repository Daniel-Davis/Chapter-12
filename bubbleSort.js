// Daniel Davis, bubbleSort, function file for bubble sorting //

load("arrayTestBed.js");

function bubbleSort() {
  var nunElements = this.dataStore.length;
  var temp;
  for (var outer = nunElements, outer >= 2, --outer) {
    for (var inner = 0, inner <= outer, ++inner) {
      if (this.dataStore[inner] > this.dataStore[inner+1]) {
        swap(this.dataStore, inner, inner+1);
      }
    }
  }
}
