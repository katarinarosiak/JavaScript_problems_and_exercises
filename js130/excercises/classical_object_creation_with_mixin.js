// Classical Object Creation with Mixin

// In this exercise, you'll add a mixin to your solution from this exercise. The mixin adds invoice and payTax methods.

// Check out the example run and note how the Professional mixin is applied to the Doctor and Professor constructors via extend:


function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
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

let Professional = {
  invoice() {
    console.log(`${this.fullName()} + is Billing customer`);
  },
  payTax() {
    console.log(`${this.fullName()} + Paying taxes`);
  }
}

function delegate(fromObj, toObj, methodName, ...remainingArgs) {
  return function () {
    return fromObj[methodName].call(toObj, ...remainingArgs)
  }
}

function extend(obj1, obj2) {

  let newInstance = Object.create(obj1)

  for (let key in obj1) {
    newInstance[key] = obj1[key];
  }

  for (let key in obj2) {
    newInstance[key] = delegate(obj2, newInstance, key);
  }
  return newInstance;
}




let doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), Professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), Professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
professor.fullName();            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'
console.log(doctor.fullName());

Professional.invoice = function () {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'