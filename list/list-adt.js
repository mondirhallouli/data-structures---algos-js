class List {
  constructor() {
    this.dataStore = [];
    this.listSize = 0;
    this.position = 0;
  }

  length() {
    return this.listSize;
  }
  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.dataStore = this.position = 0;
  }
  append(element) {
    this.dataStore[this.listSize] = element;
    this.listSize++;
  }
  find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) return i;
    }
    return -1;
  }
  insert(element, after) {
    let afterIdx = this.find(after);
    if (afterIdx > -1) {
      this.dataStore.splice(afterIdx + 1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  }
  remove(element) {
    let elemIdx = this.find(element);
    if (elemIdx > -1) {
      this.dataStore.splice(elemIdx, 1);
      this.listSize--;
      return true;
    }
    return false;
  }
  front() {
    this.position = 0;
  }
  end() {
    this.position = this.listSize - 1;
  }
  next() {
    if (this.position < this.listSize - 1) this.position++;
  }
  prev() {
    if (this.position > 0) this.position--;
  }
  moveTo(position) {
    if (position < this.listSize && position > -1) this.position = position;
  }
  toString() {
    return this.dataStore;
  }
  currPos() {
    return this.position;
  }
  contains(element) {
    for (let elem of this.dataStore) {
      if (elem === element) return true;
    }
    return false;
  }
  getElement() {
    return this.dataStore[this.position];
  }
}
