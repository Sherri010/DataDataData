class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }

    getData(){
        return this.data;
    }

    getNext(){
        return this.next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    addNode(data){
        const newNode = new Node(data);
        if(this.length){
            const lastNode = this.getLastNode();
            lastNode.next = newNode;
        }
        else {
            this.head = newNode;
        }
        this.length++;
        this.printLinkedList();
    }

    deleteNode(index){
        if(index > this.length){
            console.log('invalid index');
            return;
        }

        let node = this.head;
        let previousNode;
        for(let i = 0; i<= index; i++){
            previousNode = node;
            node = node.next;
        }
        console.log('removing', node)
        previousNode.next = node.next;
        this.length--;
        this.printLinkedList();
    }

    getLastNode(){
        let node = this.head;

        while (node.next){
            node = node.next;
        }

        return node;
    }

    printLinkedList(){
        let node = this.head;
        while(node){
            console.log('-', node.data);
            node = node.next;
        }
    }
}

export {
    LinkedList,
};
