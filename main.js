// ARQUIVO PRINCIPAL

let quemJoga = 'X';
let jogadores = [1, 2];
let taJogando = true;
let pontuacao = 1;

let tabuleiro = [
    [
        document.getElementById('p1'),
        document.getElementById('p2'),
        document.getElementById('p3')
    ],
    [   
        document.getElementById('p4'),
        document.getElementById('p5'),
        document.getElementById('p6')
    ],
    [   
        document.getElementById('p7'),
        document.getElementById('p8'),
        document.getElementById('p9')
    ]
];



const posJogo = document.querySelectorAll('.pos-jogo');
const vencedor = document.getElementById('vencedor');
const pontoJogador1 = document.getElementById('ponto-jogador-1');
const pontoJogador2 = document.getElementById('ponto-jogador-2');





function jogar(id) {
    if(taJogando) {
        if(quemJoga === 'X') {
            document.getElementById(id).textContent = quemJoga;
            document.getElementById(id).style.cursor = 'auto';
            quemJoga = 'O';
        } else  {
            document.getElementById(id).textContent = quemJoga;
            document.getElementById(id).style.cursor = 'auto';
            quemJoga = 'X';
        }
        
        const verificar = verificarVitoria();
        if(verificar === jogadores[0]) {
            vencedor.style.display = 'block';
            vencedor.textContent = `Jogador ${jogadores[0]} venceu!`;
            pontoJogador1.textContent = `Jogador 1: ${pontuacao++}`;
            posJogo.forEach((p) => {
                p.style.cursor = 'auto';
            })
            taJogando = false;
        } else if(verificar === jogadores[1]){
            vencedor.style.display = 'block';
            vencedor.textContent = `Jogador ${jogadores[1]} venceu!`;
            pontoJogador2.textContent = `Jogador 2: ${pontuacao++}`;
            posJogo.forEach((p) => {
                p.style.cursor = 'auto';
            })
            taJogando = false;
        }
    }
}



function reiniciar() {
    for(let l = 0; l < 3; l++) {
        for(let c = 0; c < 3; c++) {
            tabuleiro[l][c].textContent = '';

        }
    }
    taJogando = true;
    posJogo.forEach((p) => {
        p.style.cursor = 'pointer';
    })

    vencedor.style.display = 'none';
}



function verificarVitoria() {
    for(let l = 0; l < 3; l++) {
        if(tabuleiro[l][0].textContent === 'X'
            && tabuleiro[l][1].textContent === 'X'
            && tabuleiro[l][2].textContent === 'X'){
                return jogadores[0];
        } else if(tabuleiro[l][0].textContent === 'O'
             && tabuleiro[l][1].textContent === 'O'
             && tabuleiro[l][2].textContent === 'O') {
                 return jogadores[1];

        }
    }

    for(let c = 0; c < 3; c++) {
        if(tabuleiro[0][c].textContent === 'X'
            && tabuleiro[1][c].textContent === 'X'
            && tabuleiro[2][c].textContent === 'X'){
                return jogadores[0];
        } else if(tabuleiro[0][c].textContent === 'O'
             && tabuleiro[1][c].textContent === 'O'
             && tabuleiro[2][c].textContent === 'O') {
                 return jogadores[1];

        }
    }

    if(tabuleiro[0][0].textContent === 'X' && 
        tabuleiro[1][1].textContent === 'X' && 
        tabuleiro[2][2].textContent === 'X') {
            return jogadores[0];
        } else if(tabuleiro[0][0].textContent === 'O' && 
            tabuleiro[1][1].textContent === 'O' && 
            tabuleiro[2][2].textContent === 'O') {
                return jogadores[1];
        }
    
        if(tabuleiro[0][2].textContent === 'X' && 
        tabuleiro[1][1].textContent === 'X' && 
        tabuleiro[2][0].textContent === 'X') {
            return jogadores[0];
        } else if(tabuleiro[0][2].textContent === 'O' && 
            tabuleiro[1][1].textContent === 'O' && 
            tabuleiro[2][0].textContent === 'O') {
                return jogadores[1];
        } 
        
}
    
    
