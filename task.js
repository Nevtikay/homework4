function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
}

Student.prototype.addMark = function (marks) {
    if(this.marks === undefined){ 
    this.marks = [marks];
    } else {
    this.marks.push(marks);
    }
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){ 
    this.marks = [marks];
    } else {
    this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    let sum = this.marks.reduce((a, c) => (a + c));
    return sum / this.marks.length;
}

Student.prototype.exclude = function(reason){
  delete this.subject;
  delete this.marks;
  this.reason = reason;
  }
 let student1 = new Student("Tony", "male", 37);
 student1.setSubject("Algebra");
 student1.addMark(5);
 student1.addMark(4);
 student1.addMark(5);
 console.log(student1.getAverage()); 
 console.log(student1);
 let student2 = new Student("Buzz", "female", 35);
 student2.setSubject("Geometry");
 student2.addMark(2);
 student2.addMark(3);
 student2.addMark(2);
 student2.exclude('low grades')
 console.log(student2)
  