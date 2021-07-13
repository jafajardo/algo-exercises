// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    if (!this.head) return 0;

    let node = this.head;
    let size = 1;
    while (node.next) {
      size++;
      node = node.next;
    }

    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head;
    while (node) {
      if (!node.next.next) {
        node.next = null;
      }

      node = node.next;
    }
  }

  insertLast(data) {
    if (!this.head) {
      this.insertFirst(data);
      return;
    }

    // let node = this.head;
    // while (node.next) {
    //   node = node.next;
    // }

    let node = this.getLast();
    node.next = new Node(data);
  }
}

module.exports = { Node, LinkedList };
