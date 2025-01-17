document.addEventListener("DOMContentLoaded", () => {
    // Menuボタンのクリックイベント
    document.querySelector('.MenuIcon').addEventListener('click', function () {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('open');
    });

    // TopTitleのアニメーション
    const topTitle = document.querySelector(".TopTitle");
    topTitle.classList.add("visible");
});