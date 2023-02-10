window.onload = function() {
  const output = document.querySelector("#excuse");
  const button = document.getElementById("btn");

  button.addEventListener("click", function() {
    output.innerHTML = Generateexcuse();
  });
};

let Generateexcuse = () => {
  let who = ["my sister", "my granma", "his cat", "my bird"];
  let what = ["eat", "pissed", "crushed", "broke"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoindex = Math.floor(Math.random() * who.length);
  let whatindex = Math.floor(Math.random() * what.length);
  let whenindex = Math.floor(Math.random() * when.length);

  return who[whoindex] + " " + what[whatindex] + " " + when[whenindex];
};
