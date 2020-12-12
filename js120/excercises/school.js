// School
// Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

// addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
// To test your code, use the three student objects listed below. Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects


function createStudent(name, year) {
  return {
    name: name,
    year: year,
    enrolledCourses: [],
    listCourses: function () {
      console.log(this.enrolledCourses);
    },
    info: function () {
      console.log(`${this.name} is a ${this.year} student.`);
    },
    addCourse: function (course) {
      this.enrolledCourses.push(course);
    },
    addNote: function (code, note) {
      this.enrolledCourses.forEach(obj => {
        if (obj.code === code) {
          if (obj.note) {
            obj.note.push(note)
          } else {
            obj.note = [];
            obj.note.push(note);
          }
        }
      })
    },
    updateNote: function (code, newNote) {
      this.enrolledCourses.forEach(obj => {
        if (obj.code === code) {
          obj.note = [newNote];
        }
      })
    },
    viewNotes: function () {
      this.enrolledCourses.forEach(obj => {
        if (obj.note) {
          console.log(`${obj.name}: ${obj.note}`);
        }
      })
    }
  }
}

let school = {
  students: [],
  validYear: ['1st', '2nd', '3rd', '4th', '5th'],
  createStudent: createStudent,
  courses: [],
  createCourse: function (name, code) {
    this.courses.push({
      name,
      code,
    });
  },
  addStudent: function (name, year) {
    if (!this.validYear.includes(year)) {
      console.log('invalid year');
    } else {
      this.students.push(this.createStudent(name, year));
    }
  },
  enrollStudent: function (name, courseName) {
    this.students.forEach(stud => {
      if (stud.name === name) {
        this.courses.forEach(course => {
          if (course.name === courseName) {
            stud.addCourse(course);
          }
        })
      }
    })

  },
  getReportCard: function (student) {
    this.students.forEach(pers => {
      if (pers.name === student) {
        pers.enrolledCourses.forEach(course => {
          if (course.grade) {
            console.log(`${course.name}: ${course.grade}`);
          } else {
            console.log(`${course.name}: In progress`);
          }
        })
      }
    })
  },
  gradeStudent: function (studentName, subject, grade) {
    this.students.forEach(pers => {
      if (pers.name === studentName) {
        pers.enrolledCourses.forEach(course => {
          if (course.name === subject) {
            course.grade = grade;
          }
        })
      }
    })
  },
  courseReport: function (courseName) {
    let grades = [];
    this.students.forEach(pers => {
      pers.enrolledCourses.forEach(course => {
        if (course.name === courseName) {
          if (course.grade) {
            console.log(`${pers.name} grade: ${course.grade}`);
            grades.push(course.grade);
          }
        }
      })
    })
    if (grades.length > 0) {
      let average = grades.reduce((reducc, num) => reducc + num) / grades.length;
      console.log(average);
    } else {
      console.log(undefined);
    }
  }
}
school.createCourse('Math', 101);
school.createCourse('Advanced Math', 102);
school.createCourse('Physics', 202);

school.addStudent('foo', '3rd');
//school.students;
school.enrollStudent('foo', 'Math');
school.gradeStudent('foo', 'Math', 95);
school.enrollStudent('foo', 'Advanced Math');
school.gradeStudent('foo', 'Advanced Math', 90)
school.enrollStudent('foo', 'Physics');

school.addStudent('bar', '1st');
school.enrollStudent('bar', 'Math');
school.gradeStudent('bar', 'Math', 91);

school.addStudent('qux', '2nd');
school.enrollStudent('qux', 'Math');
school.enrollStudent('qux', 'Advanced Math');
school.gradeStudent('qux', 'Math', 93);
school.gradeStudent('qux', 'Advanced Math', 90);

//school.getReportCard('foo');
school.courseReport('Physics');


// foo;
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }


// > school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

// > school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

// > school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

// > school.courseReport('Physics');
// = undefined