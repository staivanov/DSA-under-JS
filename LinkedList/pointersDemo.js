const basket = ['apples', 'grapes', 'pears'];

let obj1 = { a: true };
let obj2 = obj1;
obj1.a = 'Hallo';
//obj2 still referencing 'a' in the memory and it's not going to delete it.


//'true' will be deleted from the memory, because nothing is pointing to it.
obj2.a = 'Vasko';
console.log('2', obj2);

//Pointer is a reference up to something in the memory.

// let myLinkedList = {
//     head: {
//         value: 88,
//         next: {
//             value: 10,
//             next: {
//                 value: 5,
//                 next: null
//             }
//         }
//     }
// };


let linkedList = new LinkedList(50);
console.log(linkedList);