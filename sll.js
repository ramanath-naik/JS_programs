class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at head
    insertAtHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert at tail
    insertAtTail(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }

    // Insert at specific position (1-based index)
    insertAtPosition(value, position) {
        if (position < 1) {
            console.log("Invalid position");
            return;
        }

        // Insert at head
        if (position === 1) {
            this.insertAtHead(value);
            return;
        }

        const newNode = new Node(value);
        let curr = this.head;
        let currentPosition = 1;

        while (curr && currentPosition < position - 1) {
            curr = curr.next;
            currentPosition++;
        }

        if (!curr) {
            console.log("Position out of range");
            return;
        }

        newNode.next = curr.next;
        curr.next = newNode;
    }

    // Delete a value
    delete(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        while (curr.next && curr.next.value !== value) {
            curr = curr.next;
        }

        if (curr.next) curr.next = curr.next.next;
    }

    // Delete first node (pop front)
    popFront() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        console.log("Deleted from front:", this.head.value);
        this.head = this.head.next;
    }

    // Delete last node (pop back)
    popBack() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        // Only one element
        if (!this.head.next) {
            console.log("Deleted from back:", this.head.value);
            this.head = null;
            return;
        }

        let curr = this.head;
        while (curr.next && curr.next.next) {
            curr = curr.next;
        }

        console.log("Deleted from back:", curr.next.value);
        curr.next = null;
    }

    // Reverse Linked sll
    reverse() {
        let prev = null;
        let curr = this.head;

        while (curr) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }

        this.head = prev;
    }

    // Search for a value
    search(value) {
        let curr = this.head;
        let position = 1;

        while (curr) {
            if (curr.value === value) return position;
            curr = curr.next;
            position++;
        }
        return -1; // not found
    }

    // Print sll
    print(node) {
        let curr = !node ? this.head : node;
        let result = [];
        while (curr) {
            result.push(curr.value);
            curr = curr.next;
        }
        console.log(result.join(" -> "));
    }

    // Middle of the Linked List
    // Fast & Slow Pointer Solution
    middleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    console.log("middle of the linked list :",slow.value);
    };

    // Merge two sorted list
    mergeTwoLists(l1, l2) {
        let dummy = new Node(0);
        let curr = dummy;

        let p = l1.head;
        let q = l2.head;

        while (p && q) {
            if (p.value < q.value) {
                curr.next = p;
                p = p.next;
            } else {
                curr.next = q;
                q = q.next;
            }
            curr = curr.next;
        }

        curr.next = p || q;

        console.log("Final sorted merged list:");
        this.print(dummy.next);
    };


}


let sll = new SinglyLinkedList();

let l1 = new SinglyLinkedList();
let l2 = new SinglyLinkedList();

l1.insertAtHead(400);
l1.insertAtHead(300);
l1.insertAtHead(100);

l2.insertAtHead(700);
l2.insertAtHead(600);
l2.insertAtHead(500);
l2.insertAtHead(200);

// sll.insertAtHead(30);
// sll.insertAtHead(20);
// sll.insertAtHead(10);

// sll.insertAtTail(40);
// sll.insertAtTail(50);
// sll.insertAtTail(100);

// sll.print();

// console.log("Searching 20:", sll.search(20));
// console.log("Searching 100:", sll.search(100));

// sll.insertAtPosition(60, 3);  // insert 30 at position 3
// sll.print();

// sll.print();
// sll.delete(30);
// sll.print();

// sll.reverse();
// sll.print();

// sll.popFront();
// sll.popBack();

// sll.print();

// sll.middleNode();

l1.print();
l2.print();
sll.mergeTwoLists(l1,l2);









// Fast & Slow Pointer (Floyd’s Cycle Detection)

// function hasCycle(head) {
//     let slow = head;
//     let fast = head;

//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if (slow === fast) return true;
//     }
//     return false;
// }


// let list2 = new SinglyLinkedList();
// list2.insertAtTail(1);
// list2.insertAtTail(2);
// list2.insertAtTail(3);

// // create cycle manually
// list2.head.next.next.next = list2.head; 

// console.log(hasCycle(list2.head));

