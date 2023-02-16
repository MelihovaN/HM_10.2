let groups = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
];

function getTopStudents(groups) {
  let students = [];
  let topStudent;
  groups.forEach((group) => {
    for (let student of group) {
      let score = group[0].score;
      if (student.score && student.score === score) {
        students.push(student);
      }
    }
  });
  topStudent = students
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .shift();
  // if (topStudent == undefined) {
  //   console.log("There is no best student in this group");
  // } else console.log("The top student is " + topStudent.name);
  return topStudent.name;
}

getTopStudents(groups);

module.exports = getTopStudents;

// function getTopStudent(groups) {
//   for (let group of groups) {
//     let topStudent;
//     let bestScore = 0;
//     let bestDate = new Date(0);
//     group.forEach((student) => {
//       if (student.score > bestScore) {
//         bestScore = student.score;
//         bestDate = new Date(student.date);
//         topStudent = student.name;
//       } else if (student.score === bestScore) {
//         if (new Date(student.date) < bestDate) {
//           bestDate = new Date(student.date);
//           topStudent = student.name;
//         }
//       }
//     });
//     //console.log(topStudent);
//     return topStudent;
//   }
// }

// getTopStudent(groups);
// module.exports = getTopStudent;
