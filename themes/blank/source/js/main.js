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

const message = "Hello, Hexo!";
console.log(message);