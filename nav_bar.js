// 在 nav_bar.js 中加入這段來生成導覽列
document.getElementById('navBar').innerHTML = `
    <div style="background-color: #333333; padding: 12px; display: flex; justify-content: center; gap: 20px;">
        <a href="resume.html" style="color: white; text-decoration: none; font-size: 14px;">教練資歷</a>
        <a href="course.html" style="color: white; text-decoration: none; font-size: 14px;">課程簡介</a>
        <a href="tools.html" style="color: white; text-decoration: none; font-size: 14px;">配速工具</a>
        <a href="training.html" style="color: white; text-decoration: none; font-size: 14px;">訓練日誌</a>
        <a href="races.html" style="color: white; text-decoration: none; font-size: 14px;">賽事日誌</a>
    </div>
`;