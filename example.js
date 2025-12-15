class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

     print(node) {
        let curr = !node ? this.head : node;
        let result = [];
        while (curr) {
            result.push(curr.value);
            curr = curr.next;
        }
        console.log(result.join(" -> "));
    }

    reverseList(){
        let prev, curr=this.head;
        while(curr){
            const next = curr.next;
            curr.next = prev;
            prev=curr;
            curr=next;
        }
        return prev;
    }

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

    isPalindrome(){
        if(!this.head || !this.head.next) return true;
        let slow=this.head;
        let fast=this.head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(slow, "#############",fast);

        let prev=null;
        let curr = slow;
        while(curr){
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        let p1=this.head, p2=prev;
        while(p2){
            if(p1.value !== p2.value) return false;
            p1=p1.next;
            p2=p2.next;
        }
        return true;
    }

    sortList(head) {
        if (!head || !head.next) return head;

        // 1. Split list into two halves
        let slow = head, fast = head, prev = null;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        prev.next = null; // cut the list: head..prev | slow..

        // 2. Sort both halves (recursive calls)
        let left = this.sortList(head);
        let right = this.sortList(slow);

        // 3. Merge sorted halves
        return this.merge(left, right);
    }

    merge(l1, l2) {
        let dummy = new ListNode(0);
        let tail = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        tail.next = l1 || l2; // attach the remainder
        return dummy.next;
    }

    merge(l1, l2) {
        let dummy = new Node(0);
        let tail = dummy;

        while (l1 && l2) {
            if (l1.value < l2.value) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        tail.next = l1 || l2;

        return dummy.next;
    }

}

// const ll = new List();

// ll.insert(30);
// ll.insert(20);
// ll.insert(10);

// console.log("list");
// ll.print();

// console.log("list after reverse");
// ll.print(ll.reverseList());


// let l1 = new List();
// let l2 = new List();

// l1.insert(400);
// l1.insert(300);
// l1.insert(100);

// l2.insert(700);
// l2.insert(600);
// l2.insert(500);
// l2.insert(200);

// l1.print();
// l2.print();
// ll.mergeTwoLists(l1,l2);

// const pal = new List();
// pal.insert(1);
// pal.insert(2);
// pal.insert(2);
// pal.insert(1);

// pal.print();
// console.log("Is Palindrome", pal.isPalindrome());


const list = new List();
list.insert(3);
list.insert(1);
list.insert(4);
list.insert(2);

console.log("Original:");
list.print();

console.log("Sorted:");
list.head = list.sortList(list.head);
list.print();
