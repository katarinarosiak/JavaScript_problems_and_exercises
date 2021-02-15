class CustomSet {
  constructor(set = []) {
    this.set = set;
  }
  contains(el) {
    return this.set.includes(el);
  }
  isSubset(setObj) {

    const setArr = setObj.set;
    const arr = [];

    if (this.isEmpty()) return true;

    for (let index = 0; index < setArr.length; index++) {
      for (let index2 = index + 1; index2 < setArr.length + 1; index2++) {
        arr.push(setArr.slice(index, index2));
      }
    }
    return arr.some(el => this.isEqual(el, this.set));
  }

  isEqual(arr1, arr2) {
    const lengst = arr1.length > arr2.length ? arr1 : arr2;
    const shortest = arr1.length <= arr2.length ? arr1 : arr2;

    return lengst.every((el, index) => {
      return el === shortest[index];
    });
  }
  isEmpty() {
    console.log(this.set);
    return this.set.length === 0;
  }

  isSame(obj) {
    const arr1 = obj.set.sort((a, b) => a - b);
    const arr2 = this.set.sort((a, b) => a - b);
    return this.isEqual(arr1, arr2);
  }
  add(el) {
    if (!this.set.includes(el)) {
      this.set.push(el);
    }
    return this;
  }
  intersection(obj) {

    const set1 = this.set;
    const set2 = obj.set;
    const sharedElem = [];

    set1.forEach(el => {
      if (set2.includes(el)) {
        sharedElem.push(el);
      }
    });
    return new CustomSet(sharedElem);
  }
  difference(obj) {
    const differenceSet = [];
    const set1 = this.set;
    const set2 = obj.set;

    set1.forEach(el => {
      if (!set2.includes(el)) {
        differenceSet.push(el);
      }
    });

    return new CustomSet(differenceSet);
  }
  union(obj) {
    const unionSet = [];

    this.set.forEach(el => {
      if (!unionSet.includes(el)) {
        unionSet.push(el);
      }
    });

    obj.set.forEach(el => {
      if (!unionSet.includes(el)) {
        unionSet.push(el);
      }
    })

    return new CustomSet(unionSet);
  }
  isDisjoint(obj) {
    return !this.set.some(el => obj.set.includes(el))
  }
}

module.exports = CustomSet;