document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel img');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        images[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // 为圆点添加点击事件
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });

    // 自动轮播
    setInterval(nextImage, 5000);
}); 