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

function handleFormSubmit(event) {
    event.preventDefault();
    var name = document.getElementById('form-name').value;
    var lang = document.documentElement.lang;
    var message = (lang === 'zh-tw')
        ? '感謝您，' + name + '！您的詢問已記錄。我將盡快回覆您。'
        : 'Thank you, ' + name + '! Your inquiry has been noted. I will respond shortly.';
    alert(message);
    event.target.reset();
}
