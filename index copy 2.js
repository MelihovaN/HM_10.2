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
let studentList = []; // создаем массив, куда будем складывать каждый массив студентов.

for (let students of groups) {
  students.forEach((element) => studentList.push(element));
}

let sortedStudents = studentList.sort((a, b) => {
  return a.score > b.score && Date(a.date) > Date(b.date); // сортируем по баллам и если баллы одинаковые, сортируем по дате
});

let topStudent = sortedStudents.reverse().pop(); // переворачиваем массив, так как наш студент сейчас в начале массива, отделяем последний элемент массива и и присваиваем его переменной topStudent = { name: 'Ivan', score: 35, date: '2022-10-11' }
console.log(topStudent);
