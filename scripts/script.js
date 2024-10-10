const divJogo = document.getElementById("telaJogo");
const fundoJogo = document.getElementById("fundoJogo");

//comodos
var comodos = ["Titulo", "Cozinha"];
var comodoMapas = ["#telaTitulo", "#mapaCozinha"];
var comodoImagens = ["/assets/titulo.jpeg", "/assets/cozinha.png"]
var comodoAtual = comodos[0];

//interface
const interfaceHUD = document.getElementById("interfaceJogo");
const adesivoHUD = document.getElementById("adesivo");

const consumoAtual = document.getElementById("consumoAtual");
const consumoInicial = document.getElementById("consumoInicial");
const economiaTotal = document.getElementById("economiaTotal");

//quartos
const cozinhaMapa = document.getElementsByName("mapaCozinha");
var cozinhaObjetos = [["geladeira", "Geladeira", 25, true], ["microondas", "Micro-ondas", 75, true], ["fogao", "Fogão", 150, true], ["loucas", "Lava-louças", 150, true]];
var cozinhaProgresso = 0;

var jogadorComodo = 0;
var jogadorProgresso = [cozinhaProgresso];

function mudarTela(mapa){
	fundoJogo.setAttribute('usemap', comodoMapas[mapa]);
	console.log(fundoJogo);
	fundoJogo.src = comodoImagens[mapa];
	
	jogadorComodo = mapa;
	console.log(jogadorComodo);
	comodoAtual = comodos[mapa];
	
	if(mapa != 0){ interfaceHUD.style.visibility = "visible"; }
}

function objetoClicado(objetoNome){
	var objetoAtual = cozinhaObjetos[objetoNome];
	
	if(!objetoAtual[3]){
		console.log("Não.");
		return;
	} else {
		objetoAtual[3] = false;
		jogadorProgresso[jogadorComodo - 1] += objetoAtual[2];

		let resultado = jogadorProgresso[jogadorComodo - 1];
		consumoAtual.innerHTML = resultado.toString();
	}
}

let eventoToque = 'ontouchstart' in window ? 'touchstart' : 'click';

if(screen.availHeight > screen.availWidth){
	//
}