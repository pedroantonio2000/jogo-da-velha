// ARQUIVO DE TESTE


let jogo = [];
let tabuleiro = [];
let quemTaJogando = 0;
let verificar;
let taJogando = true;
let nivel = 1;
let jogadaDaMaquina = 1;
let quemComeca = 1;


function cpuJoga() {
    if(taJogando) {
        let l, c;
        if(nivel === 1) {
            do{
                l = Math.floor(Math.random() * 2);
                c = Math.floor(Math.random() * 2);
            }while(jogo[l][c] !== '');
            jogo[l][c] = 'O';

        }else if(nivel === '2') {

        }
        verificar = verificarVitoria();
        if(verificar !== '') {
            alert(verificar + ' venceu');
            taJogando = false;
        }
        atualizarTabuleiro();
        quemTaJogando = 0;
    }
}

function verificarVitoria() {
    let l, c;
    for(l = 0; l < 3; l++) {
        if((jogo[l][0] === jogo[l][1]) && (jogo[l][1] === jogo[l][2])) {
            return jogo[l][0];
        }
    }

    for(c = 0; c < 3; c++) {
        if((jogo[0][c] === jogo[1][c]) && (jogo[1][c] === jogo[2][c])) {
            return jogo[0][c];
        }
    }

    if((jogo[0][0] === jogo[1][1]) && (jogo[1][1] === jogo[2][2])) {
        return jogo[0][0];
    }

    if((jogo[0][2] === jogo[1][1]) && (jogo[1][1] === jogo[2][0])) {
        return jogo[0][2];
    }

    return '';
}

function atualizarTabuleiro() {
    for(let l = 0; l < 3; l++) {
        for(let c = 0; c < 3; c++) {
            if(jogo[l][c] === 'X') {
                tabuleiro[l][c].textContent = 'X';
            } else if(jogo[l][c] === 'O') {
                tabuleiro[l][c].textContent = 'O';
            } else {
                tabuleiro[l][c].textContent = '';
            }
        }
    }
}

function jogar(p) {
    if(taJogando && quemTaJogando === 0) {
        switch(p) {
            case 1:
                if(jogo[0][0] === '') {
                    jogo[0][0] = 'X';
                    quemTaJogando = 1;

                }
            break;

            case 2:
                if(jogo[0][1] === '') {
                    jogo[0][1] = 'X';
                    quemTaJogando = 1;

                }
            break;

            case 3:
                if(jogo[0][2] === '') {
                    jogo[0][2] = 'X';
                    quemTaJogando = 1;

                }
            break;

            case 4:
                if(jogo[1][0] === '') {
                    jogo[1][0] = 'X';
                    quemTaJogando = 1;

                }
            break;

            case 5:
                if(jogo[1][1] === '') {
                    jogo[1][1] = 'X';
                    quemTaJogando = 1;

                }
            break;

            case 6:
                if(jogo[1][2] === '') {
                    jogo[1][2] = 'X';
                    quemTaJogando = 1;

                }
            break;

            case 7:
                if(jogo[2][0] === '') {
                    jogo[2][0] = 'X';
                    quemTaJogando = 1;

                }
            break;

            case 8:
                if(jogo[2][1] === '') {
                    jogo[2][1] = 'X';
                    quemTaJogando = 1;

                }
            break;

            default:
                if(jogo[2][2] === '') {
                    jogo[2][2] = 'X';
                   // tabuleiro[2][2].textContent = 'X';
                    quemTaJogando = 1;

                }
            break;
        }
        if(quemTaJogando === 1) {
            verificar = verificarVitoria();
            if(verificar !== '') {
                alert(verificar + ' venceu');
                taJogando = false;
            }
            atualizarTabuleiro();
            cpuJoga();

        }
    }
}



function iniciar() {
    taJogando = true;
    jogadaDaMaquina = 1;
    jogo = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    tabuleiro = [
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
 ]
}

window.addEventListener('load', iniciar);