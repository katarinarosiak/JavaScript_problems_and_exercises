let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};


// i: nested object with info about students 
// o: obj: 
//   class record summary 
//   {
//     studentGrade: [str],
//     exams: [{average: num, minimum: num, maximum: num}, {}]
//   }

// - compute average from each exam 
// - find minimum score for each exam 
// - find max score for each exam 
// - compute studentGrades: 


// - weight: 
// Exam 65% 
// Exercises 35%

// - each terms has 4 exams and several exercises 
// - every exam has fixed max score of 100%
// - exercises varied max scores, values and count
// - total value for all exercises is 100 (regardless num of exercises)
// - Round the exam averages to one digit after the decimal point.

// for example : 
// 1 terms: [30, 20, 10, 20, 20]
// 2 term: [20, 30, 50]

// counting students grade: 
// - determine student's average score from exams (4)
// - sum all exercises score 
// - apply weight to compute student's final percent grade
// - determine the letter eqivalent 

// Percent Grade	Letter Equivalent
// 93 - 100	A
// 85 - 92	B
// 77 - 84	C
// 69 - 76	D
// 60 - 68	E
// 0 - 59	F

// example: 
// term with 3 exercises: (max score)  [20, 30, 50]. 
// exams:  [90, 80, 95, 71] 
// exercises:  [20, 15, 40] 


// average score from exams: 84
// exercise sum: 75
// 84 * .65 + 75 * .35 = 80.85
// round to the nearest int = 81
// (av exam score * 0.65 + exam sum * 0.35 )
// letter - C
// combaine percentage and letter "81 (C)"



// Algo: 
// - itereat through the students object 
// - for each students count student grade:
//   - determine student's average score from exams (4)
//      - sum all exercises score 
//      - apply weight to compute student's final percent grade
//      - determine the letter eqivalent 
//      - append it to an array with StudentsGrades
//  - iterate through each exam scores
//     - determine max 
//       - compare to saved max and change if higher 
//     - determine min score 
//       - comprae to min score ans change f lower 
//     - determine average 
//       - create avariable allExam Score 
//       - on each exam append scores to the property (per exam) average (if variable doesn't exist create it) 
//   - sum all the exam scores, and count average 
// - return the object 

// - studentExams [100, 100, 100, 100],
//- iterate through studentExams array
// -  take the first
// - of object on current index doesn exist:
//   Average: 
//   - create an object and push to array 
//   - create an average property and assign an empty array
//   - push the score to it 
//   Min:
//   - create minimum property and assign exam score 
//   Max: 
//   - create maximum property and assign score to it 
// - if object already exist: 
//   Avergae:
//   - push score to avergarage 
//   MIn:
//     - check the min if less change
//   Max:     
//     - check max if more change

// student1: {
//   id: 123456789,
//   scores: {
//     exams: [90, 95, 100, 80],
//     exercises: [20, 15, 10, 19, 15],
//   },
// },

//iterate through students
// - on each student
// itearet through his exams 
// take the first exam and push it to the array with scores for first exam 
// take the second score and push it to the array with scores fro second exam 
// continue until all of the scores and all of the students 


function generateClassRecordSummary(scores) {
  const EXAM_NUM = 4;
  const STUDENTS_AMOUNT = Object.keys(scores).length;
  let classRecordSummary = {
    studentsGrades: [],
    exams: [
      {},
      {},
      {},
      {}
    ]
  }

  for (let student in scores) {
    classRecordSummary.studentsGrades.push(countGrade(scores[student], EXAM_NUM),);

    let studentsExams = scores[student].scores.exams;

    classRecordSummary.exams = getStudentsGradePerExam(classRecordSummary.exams, studentsExams);

  }

  classRecordSummary.exams.forEach(exam => {
    let minmax = countMinAndMax(exam)
    exam.minimum = minmax[0];
    exam.maximum = minmax[1];
  });

  countExamAverage(classRecordSummary, STUDENTS_AMOUNT);

  return classRecordSummary;
}


function countMinAndMax(exam) {
  let examScores = exam.average.slice();
  let max = examScores.reduce((max, score) => (max >= score ? max : score));
  let min = examScores.reduce((min, score) => (min <= score ? min : score));

  return [min, max];
}


function setMinimumScorePerExam(studentsExams, examInfo) {

  let examInformation = examInfo.slice();
  studentsExams.forEach((examScore, idx) => {
    examInformation[idx] = Math.min(examInformation[idx], examScore);
  });
  return examInformation;
};

function getStudentsGradePerExam(examsArr, studentsExams) {
  let exams = examsArr.slice();
  studentsExams.forEach((examGrade, idx) => {
    if (exams[idx].average) {
      exams[idx].average.push(examGrade);
    } else {
      exams[idx].average = [];
      exams[idx].average.push(examGrade);
    }
  })
  return exams;
}


function countGrade(student, EXAM_NUM) {
  let exams = student.scores.exams;
  let exercises = student.scores.exercises;
  let average = countAverage(exams, EXAM_NUM);
  let exercScoreSum = exercises.reduce((acc, sum) => acc + sum);
  let weight = countWeight(average, exercScoreSum);
  return `${weight} (${determineLetter(weight)})`;
}

function countExamAverage(classRecordSummary, EXAM_NUM) {
  classRecordSummary.exams.forEach(exam => {
    exam.average = countAverage(exam.average, EXAM_NUM);
  });
}

function countAverage(exams, divider) {
  return exams.reduce((acc, sum) => acc + sum) / divider;
};


function countWeight(average, exercScoreSum) {
  return Math.round(average * 0.65 + exercScoreSum * 0.35);
};

function determineLetter(score) {
  let letters = {
    A: [93, 100],
    B: [85, 92],
    C: [77, 84],
    D: [69, 76],
    E: [60, 68],
    F: [0, 59]
  };
  return Object.entries(letters).filter(grade => {
    return score >= grade[1][0] && score <= grade[1][1];
  })[0][0];
};




generateClassRecordSummary(studentScores);

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }


