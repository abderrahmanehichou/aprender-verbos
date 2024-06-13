window.addEventListener('scroll', function() {
    var footer = document.getElementById('site-footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;
    if (scrollPosition + windowHeight >= bodyHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
