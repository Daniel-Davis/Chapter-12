// Daniel Davis, insertionSort, class file that holds insertionSort function //

load("arrayTestBed.js");

function insertionSort() {
  var temp, inner;
  for (var outer = 1, outer <= this.dataStore.length, ++outer) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner > 0 && (this.dataStore[inner-1] >= temp)){
      this.dataStore[inner] = this.dataStore[inner-1];
      --inner;
    }
    this.dataStore[inner] = temp;
    print(this.tostring());
  }
}
