/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello World");

  document.querySelector("btn").addEventListener("click", () => {
    document.querySelector("excuse").innerHTML = generateExcuse();
  });

  document.querySelector("excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = math.floor(Math.random() * who.length);
  let actionIndex = math.floor(Math.random() * action.length);
  let whatIndex = math.floor(Math.random() * what.length);
  let whenIndex = math.floor(Math.random() * when.length);
  console.log(generateExcuse);
  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
