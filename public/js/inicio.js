
function mudar1() {
    let img = document.getElementById("pasta1");
    img.src = "/img/pastaf.png";

}
function normal1() {
    let img = document.getElementById("pasta1");
    img.src = "/img/pasta.png";
}
function mudar2() {
    let img = document.getElementById("pasta2");
    img.src = "/img/pastaf.png";

}
function normal2() {
    let img = document.getElementById("pasta2");
    img.src = "/img/pasta.png";
}
function mudar3() {
    let img = document.getElementById("pasta3");
    img.src = "/img/pastaf.png";

}
function normal3() {
    let img = document.getElementById("pasta3");
    img.src = "/img/pasta.png";
}

const switchModal = () => {
    const modal = document.querySelector('#modal');
    const actualStyle = modal.style.display;
    if (actualStyle == 'block') {
        modal.style.display = 'none';
    }
    else {
        modal.style.display = 'block';
    }
};
function switchModal2() {
    const modal = document.querySelector('#modal2');
    const actualStyle = modal.style.display;
    if (actualStyle == 'block') {
        modal.style.display = 'none';
    }
    else {
        modal.style.display = 'block';
    }
}


const btn = document.querySelector('#pasta2');
btn.addEventListener('click', switchModal);

window.onclick = function (event) {
    const modal = document.querySelector('#modal');
    const modal2 = document.querySelector('#modal2');
    const modals = document.querySelector('#modals');
    const modalr = document.querySelector('#modalr');
    if (event.target == modal) {
        switchModal();

    }
    if (event.target == modal2) {
        switchModal();
        switchModal2();
    }
    if (event.target == modals) {
        switchModalSobre();
    }
    if (event.target == modalr) {
        switchModalRank();
    }
};

const btnCriar = document.querySelector("#btnCriar");
btnCriar.addEventListener('click', switchModal2);



const btnEntrar = document.querySelector("#entrar");

btnEntrar.addEventListener('click', switchModal2);
btnEntrar.style.cursor = "pointer";

const switchModalSobre = () => {
    const modal = document.querySelector('#modals');
    const actualStyle = modal.style.display;
    if (actualStyle == 'block') {
        modal.style.display = 'none';
    }
    else {
        modal.style.display = 'block';
    }

};

const btnsobre = document.querySelector('#pasta3');
btnsobre.addEventListener('click', switchModalSobre);

const switchModalRank = () => {
    const modal = document.querySelector('#modalr');
    const actualStyle = modal.style.display;
    if (actualStyle == 'block') {
        modal.style.display = 'none';
    }
    else {
        modal.style.display = 'block';
    }
};
const btnrank = document.querySelector('#pasta1');
btnrank.addEventListener('click', switchModalRank);

// Ranks
let posicoes = document.getElementsByClassName('posicao');
let nicks = document.getElementsByClassName("nicks");
let pontuacao = document.getElementsByClassName("pontuacao");
let pageSize = 20;
let currentPage = 1;

const renderPage = () => {
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = startIndex + pageSize;

    for (let i = 0; i < nicks.length; i++) {
        if (i >= startIndex && i < endIndex) {
            nicks[i].style.display = "";
            pontuacao[i].style.display = "";
            posicoes[i].style.display = "";
        } else {
            nicks[i].style.display = "none";
            pontuacao[i].style.display = "none";
            posicoes[i].style.display = "none";
        }
    }
};

renderPage();

document.getElementById('proxButton').addEventListener('click', () => {
    if (currentPage < Math.ceil(nicks.length / pageSize)) {
        currentPage++;
        renderPage();
    }
});

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage();
    }
});