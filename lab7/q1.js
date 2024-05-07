
// using bind
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group1.showList();



// using lambda
let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach(student => console.log(this.title + ": " + student));
    }
};
group2.showList();


// using self

let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        self = this;
        this.students.forEach(function (student) {
            console.log(self.title + ": " + student);
        });
    }
};
group3.showList();

// using call
let group4 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach.call(this.students, function (student) {
            console.log(this.title + ": " + student);
        }, this); 
    }
};

group4.showList();

// using apply
 let group5 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach.apply(this.students,[ function (student) {
            console.log(this.title + ": " + student);
        }, this]); 
    }
};
group5.showList();
