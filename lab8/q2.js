function Student( firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grades=[];
   this.inputNewGrade =(newGrade)=> this.grades.push(newGrade);
    this.computeAverage= ()=>this.grades.reduce((grd,g,index,array)=>grd+g/array.length,0);
}


const stu1 = new Student("abebe","chala");
stu1.inputNewGrade(90);
stu1.inputNewGrade(88);
console.log(stu1.computeAverage());

const stu2 = new Student("johnny","bravo");
stu1.inputNewGrade(89);
stu1.inputNewGrade(92);
console.log(stu1.computeAverage());