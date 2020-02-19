let passos = [];
let passo = 0;
let passoAtual = null;

function start() {
    gerarPasso('peca1');
    gerarPasso('peca2');
    gerarPasso('peca3');
    gerarPasso('peca4');

    let frente = document.getElementById("frente");
    frente.addEventListener("click", (e) => {
        count();
        atualizarPasso('0.6 0 1', '0 0 0', true)
    })

    let tras = document.getElementById("tras");
    tras.addEventListener("click", (e) => {
        atualizarPasso('0.6 0 1', '0.6 0 1', false);
        countSub();
    })

    let loop = document.getElementById("loop");
    loop.addEventListener("click", (e) => {
        passoAtual.repetir = !passoAtual.repetir;
        atualizarPasso('0.6 0 1', '0 0 0', true);
    })
};
window.addEventListener("load", start, false);

function gerarPasso(id, repetir = false, duracao = 2000) {
    passos.push({id, repetir, duracao})
}

function atualizarPasso(from, to, visible) {
    if (passo > 0) {
        passoAtual = passos[passo - 1];
        let el = document.getElementById(passoAtual.id);
        el.setAttribute('animation', `property: position; dur: ${passoAtual.duracao}; from: ${from}; to: ${to} ;loop: ${passoAtual.repetir};`);
        el.object3D.visible = visible;
    }
}

function count() {
    passo = passo >= passos.length
        ? passos.length
        : passo + 1;
    document
        .getElementById("count")
        .innerHTML = passo;
};

function countSub() {
    passo = passo < 0
        ? 0
        : passo - 1;
    document
        .getElementById("count")
        .innerHTML = passo;
};