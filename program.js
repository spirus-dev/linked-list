import LinkedList from "./linked-list.js";

let linkedList=new LinkedList();

linkedList.toString();

linkedList.append('1');
console.log('List after appending 1 to empty list : ');
linkedList.toString();

linkedList.prepend('0');
console.log('List after prepending 0 to the list : ');
linkedList.toString();

linkedList.append('2');
linkedList.append('3');
linkedList.append('4');
linkedList.append('5');
linkedList.append('6');
linkedList.append('7');
linkedList.append('8');
linkedList.append('9');
linkedList.append('10');
linkedList.append('11');
console.log('List after appending 2-11 to the list : ');
linkedList.toString();

console.log(`The size of the linked list : ${linkedList.size()}`);

console.log('Head of linked list : ')
console.log(linkedList.head());

console.log('Tail of linked list : ')
console.log(linkedList.tail());

console.log('Node at index 5 : ');
console.log(linkedList.at(5));

linkedList.pop();
console.log('List after popping 11 : ');
linkedList.toString();

console.log(`Checking if 5 exists in the list : ${linkedList.contains('5')}`);

console.log(`Index of 5 in the list : ${linkedList.find('5')}`);
console.log(`Index of 11 in the list : ${linkedList.find('11')}`);

console.log('List after inserting DUMMY at index 5');
linkedList.insertAt('DUMMY',5);
linkedList.toString();

console.log('List after removing DUMMY from index 5');
linkedList.removeAt(5);
linkedList.toString();