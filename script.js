// ==========================
// AI Security Agent Demo
// Version 1.0
// ==========================

console.log("AI Security Agent Started");

// 获取页面元素
const startButton = document.querySelector(".ai-card button");
const textarea = document.querySelector("textarea");
const cards = document.querySelectorAll(".card button");

// 点击开始分析
startButton.addEventListener("click", () => {

    const question = textarea.value.trim();

    if(question === ""){

        alert("请输入需要分析的问题！");

        return;

    }

    window.location.href="pages/running.html";

});

// 风险排序按钮
cards[0].addEventListener("click", () => {

    window.location.href = "pages/risk-sort.html";

});

// 风险排查按钮
cards[1].addEventListener("click", () => {

    window.location.href = "pages/risk-check.html";

});

// 左侧菜单点击效果
const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});

// 最近任务点击
const rows = document.querySelectorAll("tbody tr");

rows.forEach(row=>{

    row.addEventListener("click",()=>{

        const task=row.cells[0].innerText;

        alert("打开任务：\n\n"+task);


    });

});

// 示例问题点击自动填充
const examples=document.querySelectorAll(".examples span");

examples.forEach(example=>{

    example.addEventListener("click",()=>{

        textarea.value=example.innerText;

    });

});

console.log("页面加载完成！");