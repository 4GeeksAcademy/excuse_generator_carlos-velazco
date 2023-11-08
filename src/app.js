/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoRandom = Math.floor(Math.random() * who.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);

  let frase =
    who[whoRandom] +
    " " +
    action[actionRandom] +
    " " +
    what[whatRandom] +
    " " +
    when[whenRandom];

  document.getElementById("excuse").innerHTML = frase;

  if (whoRandom === 0) {
    document.getElementById("imagen").src =
      "https://pbs.twimg.com/media/ETSKPfpU8AAun1U.jpg";
  } else if (whoRandom === 1) {
    document.getElementById("imagen").src =
      "https://pbs.twimg.com/media/F2jAz_BWQBAxE6u.jpg";
  } else if (whoRandom === 2) {
    document.getElementById("imagen").src =
      "https://upload.wikimedia.org/wikipedia/en/5/59/Pok%C3%A9mon_Squirtle_art.png";
  } else {
    document.getElementById("imagen").src =
      "https://upload.wikimedia.org/wikipedia/commons/b/ba/Kasu%C3%A1r_p%C5%99ilbov%C3%BD.jpg";
  }
};
