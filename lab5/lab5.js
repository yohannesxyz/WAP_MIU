// Question 1

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 20) {
      sum += array[i];
    }
  }
  return sum;
}

// Question 2

const getNewArray = function (array) {
  let strings = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5 && array[i].includes("a")) {
      strings.push(array[i]);
    }
  }
  return strings;
};

// Question 3

const concat = (a, b, c) => [...a, ...b, ...c];

// Question 4

const students = [
  { name: "Quincy", grades: [99, 88], courses: ["cs301", "cs303"] },

  { name: "Jason", grades: [29, 38], courses: ["cs201", "cs203"] },

  { name: "Alexis", grades: [79, 78], courses: ["cs105", "cs211"] },

  { name: "Sam", grades: [91, 82], courses: ["cs445", "cs303"] },

  { name: "Katie", grades: [66, 77], courses: ["cs303", "cs477"] },
];

const averageList = students
  .filter((stu) => stu.courses.includes("cs303"))
  .map((student) => ({
    name: student.name,
    average: student.grades.reduce((x, y) => x + y, 0) / student.grades.length,
  }))
  .reduce((x, y) => {
    x[y.name] = y.average;
    return x;
  }, {});
 console.log(averageList)


 
// master map and reduce
// const students = [
//     { name: "Quincy", grades: [99, 88], courses: ["cs301", "cs303"], transcript:[{a:"ff",b:"cc"},{a:"dd",b:"ee"},{a:"gg",b:"apple"}] },
  
//     { name: "Jason", grades: [29, 38], courses: ["cs201", "cs203"] , transcript:[{a:"ff",b:"cc"},{a:"dd",b:"ee"}]},
  
//     { name: "Alexis", grades: [79, 78,91], courses: ["cs105", "cs211"] , transcript:[{a:"ff",b:"cc"},{a:"dd",b:"ee"},{a:"gg",b:"apple"}]},
  
//     { name: "Sasm", grades: [91, 82], courses: ["cs445", "cs303"] , transcript:[{a:"ff",b:"cc"},{a:"dd",b:"ee"},{a:"gg",b:"apple"}]},
  
//     { name: "Katie", grades: [66, 77], courses: ["cs303", "cs477"] , transcript:[{a:"ff",b:"cc"},{a:"dd",b:"ee"},{a:"gg",b:"apple"}]},
//   ];

//   const function1 = function(students,major,course){
//     let x =[];
//    let mapped= students.filter(x=>x.name.includes("s")&&x.grades.includes(91)&&x.transcript.find(y=>y.a=="ff"));
// x= mapped.map(z=>({name:z.name,course:z.grades.reduce((x,y,index,array)=>x+y/array.length,0)}));
// return x;
//   }

//   const function2 = function(students){
//    return function1(students).reduce((x,y)=>{
// x[y.name]=y.course;
//     return x;
//    });
//   }
//   console.log(function2(students));