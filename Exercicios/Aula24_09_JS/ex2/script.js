let curtidas = 0;
function curtir() {
    curtidas++;
    document.getElementById('contador').innerHTML = curtidas + " curtida(s)";
}

function descurtir() {
    if (curtidas > 0) {
        curtidas--;
        document.getElementById('contador').innerHTML = curtidas + " curtida(s)";
    }
}