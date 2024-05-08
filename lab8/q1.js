
function Node(value) {
    return {
        value: value,
        next: null
    };
}

function LinkedList(){
this.head=null;
this.add = (value)=>{
 if(this.head==null){
    this.head = new Node(value);
 }
 else{
    let current = this.head;
    while(current.next!=null){
        current = current.next;
    }
    current.next = new Node(value);
 }
}
this.print = ()=>{
  let temp =this.head;
  let output="LinkedList{"
  while(temp!=null){
   output+=temp.value;
   if(temp.next!=null){
    output+=",";
   }
    temp = temp.next;
  }
  output+="}";
  console.log(output);

}
this.remove = (value) => {
    if (this.head == null) {
         return;
    }
    if (this.head.value === value) {
         this.head = this.head.next; 
         return;
    }
    let temp = this.head;
    while (temp.next !== null && temp.next.value !== value) {
        temp = temp.next; 
    }
    if (temp.next !== null) {
        temp.next = temp.next.next; 
    }
 };
 
}


let linkedlist = new LinkedList();

linkedlist.add(1);

linkedlist.add(2);

linkedlist.add(3);

linkedlist.print(); //Expected Result: LinkedList{1,2,3};

linkedlist.remove(2);

linkedlist.print(); //Expected Result: LinkedList{1,3};