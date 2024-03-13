//  ARQUIVO DE TESTE

const botaoReiniciar = document.querySelector('#reiniciar');
const posicoes = document.querySelectorAll('.pos-jogo');

let tabuleiro = [
    [
        document.getElementById('1'),
        document.getElementById('2'),
        document.getElementById('3')
    ],
    [   
        document.getElementById('4'),
        document.getElementById('5'),
        document.getElementById('6')
    ],
    [   
        document.getElementById('7'),
        document.getElementById('8'),
        document.getElementById('9')
    ]
]

let jogada = 0;
let taJogando = true;



botaoReiniciar.addEventListener('click', () => {
    for(let l = 0; l < 3; l++) {
        for(let c = 0; c < 3; c++) {
            tabuleiro[l][c].textContent = '';
            
           
    }
}
    taJogando = true;
    jogada = 0;
})


function jogar(id) {
    if(taJogando) {

        if(jogada === 0) {
            document.getElementById(id).textContent = 'X';
            document.getElementById(id).removeAttribute('onclick');
            document.getElementById(id).style.cursor = 'auto';
            // cpuJoga(numberRandom);
            jogada = 1;
            
        }
        else if(jogada === 1){
            document.getElementById(id).textContent = 'O';
            document.getElementById(id).removeAttribute('onclick');
            document.getElementById(id).style.cursor = 'auto';
            jogada = 0;
        }

        let verificar = verificarVitoria();
        if(verificar === 'jogador 1 venceu') {
            alert('Jogador 1 venceu');
            taJogando = false;
        } else if(verificar === 'jogador 2 venceu') {
            alert('Jogador 2 venceu');
            taJogando = false;
        } 
            
        
        
        
    }

}

function verificarVitoria() {
    for(let l = 0; l < 3; l++) {
        if(tabuleiro[l][0].textContent === 'X'
            && tabuleiro[l][1].textContent === 'X'
            && tabuleiro[l][2].textContent === 'X'){
                
                return 'jogador 1 venceu'
        } else if(tabuleiro[l][0].textContent === 'O'
             && tabuleiro[l][1].textContent === 'O'
             && tabuleiro[l][2].textContent === 'O') {
                 
                 return 'jogador 2 venceu'

        }
    }

    for(let c = 0; c < 3; c++) {
        if(tabuleiro[0][c].textContent === 'X'
            && tabuleiro[1][c].textContent === 'X'
            && tabuleiro[2][c].textContent === 'X'){
                
                return 'jogador 1 venceu'
        } else if(tabuleiro[0][c].textContent === 'O'
             && tabuleiro[1][c].textContent === 'O'
             && tabuleiro[2][c].textContent === 'O') {
                 
                 return 'jogador 2 venceu'

        }
    }

    if(tabuleiro[0][0].textContent === 'X' && 
        tabuleiro[1][1].textContent === 'X' && 
        tabuleiro[2][2].textContent === 'X') {
            
            return 'jogador 1 venceu'
        } else if(tabuleiro[0][0].textContent === 'O' && 
            tabuleiro[1][1].textContent === 'O' && 
            tabuleiro[2][2].textContent === 'O') {
                
                return 'jogador 2 venceu'
        }
    
        if(tabuleiro[0][2].textContent === 'X' && 
        tabuleiro[1][1].textContent === 'X' && 
        tabuleiro[2][0].textContent === 'X') {
            
            return 'jogador 1 venceu'
        } else if(tabuleiro[0][2].textContent === 'O' && 
            tabuleiro[1][1].textContent === 'O' && 
            tabuleiro[2][0].textContent === 'O') {
                
                return 'jogador 2 venceu'
        }

        // for(let l = 0; l < 3; l++) {
        //     for(let c = 0; c < 3; c++) {
        //         if(tabuleiro[l][c].textContent === 'X') {
                    
        //     }
        // }
        
    }
    
    if(posicoes.innerHTML === '') {
        console.log('teste')
    }






// function cpuJoga(id) {
//     document.getElementById(id).textContent = 'O'
// }


// let numberRandom = Math.floor(Math.random() * 10);

