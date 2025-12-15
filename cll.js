class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at end
  insert(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head; // last node points to head
      return;
    }

    let temp = this.head;
    while (temp.next !== this.head) {
      temp = temp.next;
    }
    temp.next = newNode;
    newNode.next = this.head;
  }

  // Delete last node
  deleteAtEnd() {
    if (!this.head) return;

    if (this.head.next === this.head) {
      this.head = null;
      return;
    }
    let curr = this.head;
    let prev = null;
    while (curr.next !== this.head) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = this.head;
  }

  print() {
    if (!this.head) return console.log("List empty");

    let result = [];
    let curr = this.head;
    do {
      result.push(curr.value);
      curr = curr.next;
    } while (curr !== this.head)

    console.log(result.join(" -> "));
  }
}

let cll = new CircularLinkedList();
cll.insert(10);
cll.insert(20);
cll.insert(30);

cll.print();

// cll.deleteAtEnd();
// console.log("List after deletion");
// cll.print();
