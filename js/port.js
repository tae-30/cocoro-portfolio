document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 50); // 50ms 遅延
    });
    // Menuボタンのクリックイベント
    document.querySelector('.MenuIcon').addEventListener('click', function () {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('open');
    });
    visible();

    // TopTitleのアニメーション
    function visible() {
        const topTitle = document.querySelector(".TopTitle");
        topTitle.classList.add("visible");
    }

    // メニュー内リンクを取得してスクロール処理を一括登録
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // 対象のセクションIDを取得
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 100; // スクロール時のオフセット調整（適宜変更）

                gsap.to(window, {
                    duration: 0.7,
                    scrollTo: {
                        y: targetElement,
                        offsetY: headerOffset
                    }
                });

                // メニューを閉じる
                const menu = document.querySelector('.menu');
                menu.classList.remove('open');
            }
        });
    });
});
