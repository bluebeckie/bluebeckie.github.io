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
