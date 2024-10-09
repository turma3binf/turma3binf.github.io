const divJogo = document.getElementById("telaJogo");
const fundoJogo = document.getElementById("fundoJogo");
const hudTemp = document.getElementById("hudTemp");

var comodos = ["Titulo", "Cozinha"];
var comodoMapas = ["#telaTitulo", "#mapaCozinha"]
var comodoImagens = ["/assets/titulo.png", "/assets/cozinha.png"]
var comodoAtual = comodos[1];

const cozinhaMapa = document.getElementsByName("mapaCozinha");
var cozinhaObjetos = [["geladeira", "Geladeira", 250], ["microondas", "Micro-ondas", 750], ["fogao", "Fogão", 1500], ["coifa", "Coifa", 50], ["loucas", "Lava-louças", 1500]];
var cozinhaProgresso = [];

function mudarTela(mapa){
	fundoJogo.setAttribute('usemap', comodoMapas[mapa]);
	console.log(fundoJogo);
	fundoJogo.src = comodoImagens[mapa];
}

function objetoClicado(objetoNome){
	var objetoAtual = cozinhaObjetos[objetoNome];
	
	let resultado = '<br>' + objetoAtual[1] + ' -> ' + objetoAtual[2] + ' Kwh';
	hudTemp.innerHTML += resultado.toString();
}

if(screen.availHeight > screen.availWidth){
    alert("Por favor vire o celular!");
}