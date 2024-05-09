let submit = document.querySelector("#Submit");
submit.addEventListener("click", () => {
  let roll = document.querySelector("#roll").value;
  let name = document.querySelector("#name").value;
  let batch = document.querySelector("#batch").value;
  let section = document.querySelector("#section").value;
  localStorage.setItem("roll", roll);
  localStorage.setItem("name", name);
  localStorage.setItem("batch", batch);
  localStorage.setItem("section", section);

  console.log(roll);
  console.log(name1);
  console.log(batch);
  console.log(section);

  //   window.location.href = ;
});
