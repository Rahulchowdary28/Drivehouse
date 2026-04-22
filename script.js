document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('beforeAfterSlider');
    const beforeImg = slider.querySelector('.image-before');
    const handle = slider.querySelector('.slider-handle');

    const move = (e) => {
        let x = e.pageX || (e.touches ? e.touches[0].pageX : 0);
        let rect = slider.getBoundingClientRect();
        let pos = ((x - rect.left) / rect.width) * 100;
        if (pos >= 0 && pos <= 100) {
            beforeImg.style.width = pos + '%';
            handle.style.left = pos + '%';
        }
    };

    slider.addEventListener('mousedown', () => window.addEventListener('mousemove', move));
    window.addEventListener('mouseup', () => window.removeEventListener('mousemove', move));
    slider.addEventListener('touchstart', () => window.addEventListener('touchmove', move));
    window.addEventListener('touchend', () => window.removeEventListener('touchmove', move));
});