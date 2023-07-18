No javascript chamamos a função "menuShow" que está localizada em um botão, quando chamada ela irá pegar a class "mobile-menu" e vai conter a class "open" que deteriminamos no CSS (ela irá fazer o "menu-show" aparecer de acordo com o determinado tamanho estabelecido pelo media querry).


 "let menuMobile = document.querySelector('.mobile-menu');"
 ela tornou a class como uma váriavel.

 "if (menuMobile.classList.contains('open')) "
 determinou SE atingir o determinado media querry e conter a class "open"...

  "menuMobile.classList.remove('open');"
  ela irá remover o open ou seja, não aparacerá caso não for aberta. se ela não for aberta ela não ira aparecer..

   " document.querySelector('.icon').src = "menu_white_36dp.svg"; "
   ela irá sempre pegar a imagem e onde ela será colocad.

   "  else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
}"

ou seja, caso ela for clicada, já que ao contrário de não ser clicada, ela irá aparecer o display block e irá adicionar as nossas "<ul>" normalmente e adicionará o icone de "X" que será para retornar tudo ao começo e virar um "loppinn"


window.addEventListener("scroll", function() {
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
} )

o window vai avisar quando ocorrer o evento chamado scroll que acontecerá  na header, já que aplicamos o efetio de rolagam no header. Ela irá ocorrer quando o scroll descer já que dizemos que o top no header valia 0, logo, ele irá chamar uma classe atribuida como 'rolagem'. 