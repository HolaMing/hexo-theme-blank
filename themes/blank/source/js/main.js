const toggleButton = document.getElementById("light-mode-toggle");
const modeIcon = document.getElementById("mode-icon");

// 页面加载时检查 localStorage 中保存的主题
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    // 如果没有保存的主题，则默认使用暗模式
    if (savedTheme === "light-mode") {
        document.body.classList.add("light-mode");
        modeIcon.textContent = "dark_mode";  // 显示暗模式图标
    } else {
        document.body.classList.add("dark-mode");
        modeIcon.textContent = "light_mode";  // 显示亮模式图标
    }
});

toggleButton.addEventListener("click", () => {
    // 切换明暗模式类
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");

    // 切换图标内容并保存模式到 localStorage
    if (document.body.classList.contains("light-mode")) {
        modeIcon.textContent = "dark_mode";  // 显示暗模式图标
        localStorage.setItem("theme", "light-mode");
    } else {
        modeIcon.textContent = "light_mode";  // 显示亮模式图标
        localStorage.setItem("theme", "dark-mode");
    }
});

  // 获取按钮元素
  var mybutton = document.getElementById("scrollToTop");

  // 当用户滚动页面时，显示或隐藏按钮
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";  // 显示按钮
    } else {
      mybutton.style.display = "none";   // 隐藏按钮
    }
  };

  // 点击按钮时，滚动到顶部
  mybutton.onclick = function() {
    document.body.scrollTop = 0;  // 对于Safari
    document.documentElement.scrollTop = 0;  // 对于Chrome, Firefox, IE和Opera
  };