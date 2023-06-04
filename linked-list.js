import Node from "./node.js";

export default class LinkedList{
    
    constructor(){
        this.listHead=null;
        this.listTail=null;
        this.listSize=0;
    }

    append(value){
        if(this.listSize===0){
            this.listHead=new Node(value);
            this.listTail=this.listHead;
        }
        else{
            let current=this.listHead;
            while(current.next!==null){
                current=current.next;
            }
            current.next=new Node(value);
            this.listTail=current.next;
            
        }
        this.listSize++;
    }

    prepend(value){
        if(this.listSize===0){
            this.listHead=new Node(value);
            this.listTail=this.listHead;
        }
        else{
            let next=this.listHead;
            this.listHead=new Node(value);
            this.listHead.next=next;
        }
        this.listSize++
    }

    size(){
        return this.listSize;
    }

    head(){
        return this.listHead;
    }

    tail(){
        return this.listTail;
    }

    at(index){
        if(index>=this.listSize){
            console.log("Index does not exist in the list");
        }
        else if(index===0){
            return this.head();
        }
        else if(index===this.listSize-1){
            return this.tail();
        }
        else{
            let current=this.listHead;
            for(let i=0;i<index;i++){
                current=current.next;
            }
            return current;
        }
    }

    pop(){
        if(this.listSize===0){
            console.log("Cannot pop from the empty list");
        }
        else if(this.listSize==1){
            this.listHead=null;
            this.listTail=null;
            this.listSize--;
        }
        else{
            let current=this.listHead;
            let previous=null;
            while(current.next!==null){
                previous=current;
                current=current.next;
            }
            this.listTail=previous;
            previous.next=null;
            this.listSize--;
        }
    }

    contains(value){
        let current=this.listHead;
        for(let i=0;i<this.listSize;i++){
            if(current.value===value){
                return true;
            }
            current=current.next;
        }
        return false;
    }

    find(value){
        let current=this.listHead;
        for(let i=0;i<this.listSize;i++){
            if(current.value===value){
                return i;
            }
            current=current.next;
        }
        return null;
    }

    toString(){
        if(this.listSize===0){
            console.log('The list is empty')
        }
        else{
            let output='';
            let current=this.listHead;
            for(let i=0;i<this.listSize-1;i++){
                output+=`(${current.value}) -> `;
                current=current.next;
            }
            output+=`(${current.value})`;
            console.log(output);
        }
    }

    insertAt(value, index){
        if(index>this.listSize){
            console.log("Index does not exist in the list");
        }
        else if(index===0){
            this.prepend(value);
        }
        else if(index===this.listSize){
            this.append(value);
        }
        else{
            let current=this.listHead;
            for(let i=0;i<index-1;i++){
                current=current.next;
            }
            let next=current.next;
            current.next=new Node(value);
            current.next.next=next;
            this.listSize++;
        }
    }

    removeAt(index){
        if(this.listSize===0){
            console.log("The list is empty");
        }
        else if(index>=this.listSize){
            console.log("Index does not exist in the list");
        }
        else if(index===0){
            if(this.listSize===1){
                this.listTail=null;
            }
            this.listHead=this.listHead.next;
            this.listSize--;
        }
        else if(index===this.listSize-1){
            this.pop();
        }
        else{
            let current=this.listHead;
            for(let i=0;i<index-1;i++){
                current=current.next;
            }
            let next=current.next.next;
            current.next=next;
            this.listSize--;
        }
    }

}
