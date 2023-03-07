document.body.onclick = (event) => {
    const elem = event.target;
    // console.log(elem);
    if (elem.classList.contains('section-symbol')) {
        console.log(elem);
        navigator.clipboard.writeText(elem.innerHTML)
            .then(() => {
                document.querySelector('').innerHTML += 'copy<br>';
            })
            alert('Роль скопирована. Однако, обратите внимание, уведомление не сработает простой вставкой в discord, так как имеет специальные символы.');
    }
}