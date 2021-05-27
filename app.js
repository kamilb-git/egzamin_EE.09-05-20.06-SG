const radio = document.getElementsByTagName('input');
const button = document.getElementById('but');
const div = document.getElementById('wynik');

var cena;


button.addEventListener('click', () => {
    cena = 0;
    
    if(radio[0].checked == true) cena = 25;
    if(radio[1].checked == true) cena = 30;
    if(radio[2].checked == true) cena = 40;
    if(radio[3].checked == true) cena = 50;

    div.innerHTML = `Cena strzyżenia: ${cena} zł`;
}) 