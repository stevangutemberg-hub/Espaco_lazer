function irParaDetalhes() {
    window.location.href = "detalhes.html";
}

function irParaSaibaMais() {
    window.location.href = "saibamais.html";
}

function contato() {
    alert("Entraremos em contato com você!");
}

// GALERIA INTERATIVA
const imagens = document.querySelectorAll(".galeria img");
const principal = document.getElementById("imgPrincipal");

if (imagens && principal) {
    imagens.forEach(img => {
        img.addEventListener("click", () => {
            principal.src = img.src;
        });
    });
}