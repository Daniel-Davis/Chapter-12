// Daniel Davis, shellSort, class file that holds the shellSort function //

load("arrayTestBed.js");

function shellSort() {
  for (var g = 0, g < this.dataStore.length, ++g ) {
    for(var i = this.gaps[g], i < this.dataStore.length, ++i) {
      var temp = this.dataStore[i];
      for (var j = i, j >= this.gaps[g] && this.dataStore[j-this.gaps[g]] > temp, j -= this.gaps[g] ) {
        this.dataStore[j] = this.dataStore[j - this.gaps[g]];
        print(this.toString());
      }
      this.dataStore[j] = temp;
    }
    print(this.toString());
  }
}
