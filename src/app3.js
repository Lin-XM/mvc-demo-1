import "./app3.css";
import $ from "jquery";
const $square = $("#app3 .square");

$square.on("click", () => {
  // toggleClass如果存在 就删除，不存在就添加
  $square.toggleClass("active");
});
