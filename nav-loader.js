// 建立一個函式來載入導航欄
function loadNav() {
    const navHTML = `
  <nav>
        <div class="container">
            <a href="index.html" class="logo">跑班訓練營</a>
            <ul>
                <li><a href="index.html">首頁</a></li>
                <li><a href="about.html">教練資歷</a></li>
                <li><a href="courses.html">課程簡介</a></li>
                <li><a href="tools.html">配速工具</a></li>
                <li><a href="testimonials.html">學員見證</a></li>

              </ul>
        </div>
    </nav>
    `;
    // 將內容插入到頁面中 id 為 "nav-placeholder" 的地方
    document.getElementById('nav-placeholder').innerHTML = navHTML;

    // 自動偵測當前頁面，幫對應的連結加上 .active 類名
    const currentPage = window.location.pathname.split("/").pop();
    
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
console.log("aaaaa");
// 頁面載入完成後執行
window.onload = loadNav;
