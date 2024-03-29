class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.printList();
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        if(index === 0){
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();

    }
    remove(index){
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next.next;

        leader.next = holdingPointer;
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.prepend(12);
myLinkedList.insert(4, 13);
myLinkedList.insert(0, 6);
myLinkedList.insert(3, 8);
console.log(myLinkedList.printList())
myLinkedList.remove(3, 8);

console.log(myLinkedList.printList())