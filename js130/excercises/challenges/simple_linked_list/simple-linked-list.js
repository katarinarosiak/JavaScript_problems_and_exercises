class Element {
  constructor(el, nextEl = null) {
    this.data = el;
    this.nextEl = nextEl;
  }
  datum() {
    return this.data;
  }
  isTail() {
    return this.nextEl === null;
  }
  next() {
    return this.nextEl;
  }
  setNextEl(nextElem) {
    this.nextEl = nextElem;
  }
}


class SimpleLinkedList {
  constructor() {
    this.items = [];
  }
  static fromArray(inputArr) {

    if (inputArr !== null) {
      let arr = inputArr.slice();
      let list = new SimpleLinkedList();
      arr.reverse().forEach(el => list.push(el));
      return list;
    } else {
      return new SimpleLinkedList();
    }
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  push(el) {

    let element = new Element(el, this.head());
    if (this.items.length === 0) {
      element.setNextEl(null);
    } else {
      element.setNextEl(this.head());
    }
    this.items.push(element);
  }
  pop() {
    return this.items.pop().datum();
  }
  peek() {
    if (this.items.length === 0) {
      return null;
    } else {
      return this.items[this.items.length - 1].datum()
    }
  }
  head() {
    return this.items[this.items.length - 1];
  }
  reverse() {
    let tempArr = this.toArray().reverse();

    return SimpleLinkedList.fromArray(tempArr);
  }
  toArray() {
    return this.items.map(el => el.datum()).reverse();
  }
}





module.exports = { Element, SimpleLinkedList }