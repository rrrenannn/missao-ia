
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
      texto: "com a saída do Cassio do Corinthians, o timão busca colocar um goleiro do elenco corintiano,qual seria um bom nome? "
    ",
          afirmação: [
            "Carlos Miguel",
            "Felipe Longo"
        ]
    },
    {
          texto: "Com o fim do Paulistão, o corinthians busca melhorar seu elenco, e com isso busca um novo treinador, Qual seria o melhor nome?",
          afirmação: [
            "Antonio Oliveira",
            "Mano Menezes"
        ]
    },
    {
          texto: "O corinthians buca um titulo que ainda é inedito na sua enorme pratileira de troféus, e com isso e ele ganhar esse titulo, ele vai se consagrar campeão de tudo, Qual titulo que falta?",
          afirmação: [
            "Sudamericana",
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

