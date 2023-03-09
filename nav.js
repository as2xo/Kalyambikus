document.write('<div id="page-preloader" class="preloader"><div class="loader"></div></div>');

document.body.onload = function(){

    setTimeout(function(){
        const preloader = document.getElementById('page-preloader');
        if (!preloader.classList.contains('done'))
        {
            preloader.classList.add('done');
            preloader.style.zIndex = '-1';
        }
    }, 50)
}
document.write('<div class="header"><a href="/Kalyambikus/index.html" class="nav-li">Главная</a> <a href="/Kalyambikus/donate.html" class="nav-li">Донат</a><a href="/Kalyambikus/kolkoiny.html" class="nav-li">КольКоины</a><a href="/Kalyambikus/discord-rolle.html" class="nav-li">Роли в дискорд</a><a href="/Kalyambikus/contacts.html" class="nav-li">Контакты</a><a href="/Kalyambikus/all-roulette.html" class="nav-li-roulette">Рулетки</a></div>');

  document.body.onclick = (event) => {
    const elem = event.target;
    // console.log(elem);
    if (elem.classList.contains('section-symbol')) {
        console.log(elem);
        navigator.clipboard.writeText(elem.innerHTML)
            .then(() => {
                document.querySelector('').innerHTML += 'copy<br>';
            })
    }
}
