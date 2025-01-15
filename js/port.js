// Menuボタンのクリックイベントを設定
document.querySelector('.MenuIcon').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
});
