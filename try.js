class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class List{
    constructor(){
        this.head=null;
    }

    insert(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head= newNode;
    }

    print(){
        let curr=this.head;
        let result=[];
        while(curr){
            result.push(curr.value);
            curr= curr.next;
        }
        console.log(result.join(" -> "));
    }

    isPalindrome(){
        if(!this.head && !this.head.next) return true;

        let slow=this.head;
        let fast=this.head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
        }

        let prev=null;
        let curr = slow;
        let next =null;
        while(curr){
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }

        let p=this.head;
        let q=prev;

        while(q){
            if(p.value !== q.value) return false;
            p=p.next;
            q=q.next;
        }

        return true;
    }
}

const sl = new List();

sl.insert(50);
sl.insert(40);
sl.insert(30);
sl.insert(20);
sl.insert(10);

// sl.insert(10);
// sl.insert(20);
// sl.insert(20);
// sl.insert(10);

sl.print();

console.log("Is Palindrome", sl.isPalindrome());