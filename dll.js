class DNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert at head
    insertAtHead(value) {
        const newNode = new DNode(value);
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    // Insert at tail
    insertAtTail(value) {
        const newNode = new DNode(value);

        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    // Delete a node
    delete(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            return;
        }

        let curr = this.head;
        while (curr && curr.value !== value) {
            curr = curr.next;
        }

        if (!curr) return;

        if (curr === this.tail) {
            this.tail = curr.prev;
            this.tail.next = null;
            return;
        }

        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
    }

    printForward() {
        let result = [];
        let curr = this.head;
        while (curr) {
            result.push(curr.value);
            curr = curr.next;
        }
        console.log("Forward:", result.join(" <-> "));
    }

    printBackward() {
        let result = [];
        let curr = this.tail;
        while (curr) {
            result.push(curr.value);
            curr = curr.prev;
        }
        console.log("Backward:", result.join(" <-> "));
    }
}


let dl = new DoublyLinkedList();

dl.insertAtHead(30);
dl.insertAtHead(20);
dl.insertAtHead(10);

dl.insertAtTail(40);
dl.insertAtTail(50);

dl.printForward();
dl.delete(30);
dl.printForward();
dl.printBackward();
