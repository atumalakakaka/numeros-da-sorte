const pontos = document.getElementById("pontos");
const gameOver = document.getElementById("game-over");
const botao = document.getElementById("botao");
const pontuacao = document.getElementById("pontuacao")
const pontuacaoRecorde = document.getElementById("pontuacao-recorde")
let valorPontuacao = 0;
let valorPontuacaoRecorde = 0;

botao.addEventListener("click", jogar);

function jogar() {
				const valor = Math.floor(Math.random()*21);
				
				gameOver.style.display = "none"
				
				mostrarPontos(valor);
				pontuacoes(valor);
}
function mostrarPontos(valor) {
				if (valor === 0) {
								pontos.textContent = "pontos: 0";
								gameOver.style.display = "block";
								
								valorPontuacao = 0;
				}
				else if (valor > 0) {
								pontos.textContent = "pontos: " + valor;
				}
}
function pontuacoes(valor) {
				valorPontuacao = valorPontuacao + valor
				pontuacao.textContent = "pontuação: " + valorPontuacao;
				
				if (valorPontuacaoRecorde <= valorPontuacao) {
								valorPontuacaoRecorde = valorPontuacao
								pontuacaoRecorde.textContent = "pontuacão recorde: " + valorPontuacaoRecorde
				}
}
				