(function () {
    var toggle = document.getElementById('mobile-nav-toggle');
    var panel = document.getElementById('mobile-nav-panel');
    var iconOpen = document.getElementById('mobile-nav-icon-open');
    var iconClose = document.getElementById('mobile-nav-icon-close');
    if (!toggle || !panel) return;

    function setOpen(open) {
        panel.classList.toggle('hidden', !open);
        iconOpen.classList.toggle('hidden', open);
        iconClose.classList.toggle('hidden', !open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggle.addEventListener('click', function () {
        setOpen(panel.classList.contains('hidden'));
    });

    panel.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') setOpen(false);
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) setOpen(false);
    });
})();
