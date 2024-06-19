
<script src="script.js"></script>
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        texto: "Assim que terminou a temporada, o palmeiras planeja reeforca o elenco elenco , então ele está pensando em contratar dois volantes, Quais contratar?",
        afirmação: [
            "Richard Rios",
            "Anibal Moreno"
        ]
    },
    {
          texto: "palmeiras tem dois melhores no elenco , quem sao ?",
          afirmação: [
            "DuDu'
            "Raphael Veiga"
        ]
    },
    {
      texto: "com a saída do Endrick do Palmeias, o palmeiras busca colocar um atacante do elenco palmeirense ,qual seria um bom nome? "
    ",
          afirmação: [
            "Flaco Lopes",
            "Rony"
        ]
    },
    {
          texto: "Com a saida de jogaores, o palmeiras busca melhorar seu elenco, e com isso busca um novo jogador, Qual seria o melhor nome?",
          afirmação: [
            "Mauricio",
            "Felipe Anderson"
        ]
    },
    {
          texto: "O palmeiras tem varios titulo , qual sao os principais ?",
          afirmação: [
            "Copa do brasil",
            "Libertadores"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", function(){
                atual++;
                mostraPergunta();
            })
            caixaAlternativas.appendChild(botaoAlternativas);
    }
}

