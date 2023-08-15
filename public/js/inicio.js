function mudar1() {
    let img = document.getElementById("pasta1");
    img.src = "images/pastaf.png";

}
function normal1() {
    let img = document.getElementById("pasta1");
    img.src = "images/pasta.png";
}
function mudar2() {
    let img = document.getElementById("pasta2");
    img.src = "images/pastaf.png";

}
function normal2() {
    let img = document.getElementById("pasta2");
    img.src = "images/pasta.png";
}
function mudar3() {
    let img = document.getElementById("pasta3");
    img.src = "images/pastaf.png";

}
function normal3() {
    let img = document.getElementById("pasta3");
    img.src = "images/pasta.png";
}

// faz a troca de modais
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

// Modal cadastrar
const switchModal2 = () => {
    const modal = document.querySelector('#modal2');
    const actualStyle = modal.style.display;
    if (actualStyle == 'block') {
        modal.style.display = 'none';
    }
    else {
        modal.style.display = 'block';
    }
};
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
document.querySelector("#login");

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


// srsr

const botao = document.querySelector('#botaoCadastro').addEventListener('click', () => {

    let nome = document.querySelector('#cnome').value;
    let nickname = document.querySelector('#cnick').value;
    let senha = document.querySelector('#csenha').value;

    switchModal2();

    if (nome.match('/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/')) {
        
    }


});
