import "./app1.css";
import $ from "jquery";
const $button1 = $("#add");
const $button2 = $("#minus");
const $button3 = $("#multi");
const $button4 = $("#division");
const $number = $("#num");
let n = localStorage.getItem("n");
$number.text(n || 100);
$button1.on("click", () => {
  // 将n 的值 存入内存中
  let n = parseInt($number.text());
  n += 1;
  localStorage.setItem("n", n);
  $number.text(n);
});
$button2.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n);

  $number.text(n);
});
$button3.on("click", () => {
  let n = parseInt($number.text());
  n = n * 2;
  localStorage.setItem("n", n);

  $number.text(n);
});
$button4.on("click", () => {
  let n = parseInt($number.text());
  n = n / 2;
  localStorage.setItem("n", n);

  $number.text(n);
});
