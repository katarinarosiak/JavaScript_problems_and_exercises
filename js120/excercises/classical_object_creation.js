//classical object creation

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function () {
  console.log(`${this.firstName} ${this.lastName}`)
};
Person.prototype.communicate = function () {
  console.log('hello');
};
Person.prototype.eat = function () {
  console.log('eat');
}
Person.prototype.sleep = function () {
  console.log('sleep');
}

function Doctor(firstName, lastName, age, gender, specialisation) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialisation = specialisation;
}
Doctor.prototype = Object.create(Person.prototype);

Doctor.prototype.diagnose = function () {
  console.log('diagnosing');
}

Doctor.constructor = Doctor;

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;

}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = function () {
  console.log('teach');
}

Professor.constructor = Professor;

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;

}
Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function () {
  console.log('study');
}

Student.constructor = Student;


function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function () {
  console.log('research')
};

GraduateStudent.constructor = GraduateStudent;



let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
person.fullName();            // logs 'foo bar'

let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
doctor.fullName();            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person); //true
console.log(graduateStudent instanceof Student); //true
console.log(graduateStudent instanceof GraduateStudent); //true
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'

