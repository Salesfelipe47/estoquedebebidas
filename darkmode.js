if (localStorage.getItem('darkmode') == 'true') {
    darkmode.checked = true;
    ativarDarkmode();
}


function ativarDarkmode () {
    if (darkmode.checked === true) {
        document.body.classList.add('bg-dark' , 'text-white');
        tabela.classList.add('table-dark');

        localStorage.setItem('darkmode' , true);
    
    } else {
        document.body.classList.remove('bg-dark' , 'text-white');
        tabela.classList.remove('table-dark');
        localStorage.setItem('darkmode' , false);
    }
}