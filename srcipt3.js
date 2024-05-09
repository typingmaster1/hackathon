let ans1 = localStorage.getItem("marks");
let h1 = document.querySelector(".h1");
h1.innerText = "Your Score is::" + ans1;

console.log(h1);
let roll = localStorage.getItem("roll");
let name1 = localStorage.getItem("name");
let batch = localStorage.getItem("batch");
let section = localStorage.getItem("section");

console.log(roll);
console.log(name1);
console.log(batch);
console.log(section);

document.querySelector(".roll").innerText = "ROLL:: " + roll;
document.querySelector(".name").innerText = "Name:: " + name1;
document.querySelector(".batch").innerText = "Batch:: " + batch;
document.querySelector(".section").innerText =
  "Section:: " + section.toUpperCase();
