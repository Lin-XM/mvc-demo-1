import "./app2.css";
import $ from "jquery";
const $tabBar = $("#app2 #tab_bar");
const $tabContent = $("#app2 #tab_content");
$tabBar.on("click", "li", (e) => {
  // 用户点击的 li 标签
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  const xIndex = $li.index();
  // 只显示点击的 那个，消失其他的，不要使用 CSS，show，hidden 这三个api
  // 而是使用 .addClass/removeClass("active") ，其他交给css 判断就行了
  // 要做到 样式 与 行为 分离
  $tabContent
    .children()
    .eq(xIndex)
    .css({ display: "block" })
    .siblings()
    .css({ display: "none" });
});
// 除了直接在 html 中添加这两个属性使得初始显示页面1。
// 还可以初始 直接触发选择事件
$tabBar.children().eq(0).trigger("click");
