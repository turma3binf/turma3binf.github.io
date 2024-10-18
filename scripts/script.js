const divJogo = document.getElementById("telaJogo");
const fundoJogo = document.getElementById("fundoJogo");

//comodos
var comodos = ["Titulo", "Cozinha", "Sala", "Quarto", "Banheiro", "Final"];
var comodoMapas = ["#telaTitulo", "#mapaCozinha", "#mapaSala", "#mapaQuarto", "#mapaBanheiro", "#telaFinal"];
var comodoImagens = ["/assets/titulo.jpeg", "/assets/comodos/cozinha1.png", "/assets/comodos/sala1.png", "/assets/comodos/quarto1.png", "/assets/comodos/banheiro1.png", "/assets/final.jpeg"]
var comodoConsumoInicial = [670, 750, 700, 725];
var comodoAtual = comodos[0];

//interface
const interfaceHUD = document.getElementById("interfaceJogo");
const adesivoHUD = document.getElementById("adesivo");

const consumoAtual = document.getElementById("consumoAtual");
const consumoInicial = document.getElementById("consumoInicial");
const economiaTotal = document.getElementById("economiaTotal");

//quartos
const cozinhaMapa = document.getElementsByName("mapaCozinha");
var cozinhaObjetos = [
	//["geladeira", "Geladeira", 25, true],
	//["microondas", "Micro-ondas", 75, true],
	//["fogao", "Fogão", 150, true],
	//["lampada", "Lâmpada", 10, true],
	//["liquidificador", "Liquidificador", 50, true]
	
	//Template para os valores
	["geladeira", "Geladeira", 25, true],
	["microondas", "Micro-ondas", 75, true],
	["fogao", "Fogão", 150, true],
	["tostadora", "Tostadora", 10, true],
	["cafeteira", "Cafeteira", 50, true]
];
var cozinhaProgresso = 0;
var cozinhaFaltando = 310;

const salaMapa = document.getElementsByName("mapaSala");
var salaObjetos = [
	["televisao", "Televisão", 150, true],
	["telefone", "Telefone", 25, true],
	["videogame", "Video-game", 100, true],
	["ventcond", "Vent-cond", 150, true],
	["luminaria", "Luminária", 25, true]
];
var salaProgresso = 0;
var salaFaltando = 450;

const quartoMapa = document.getElementsByName("mapaQuarto");
var quartoObjetos = [
	["pc", "Pc", 100, true],
	["impressora", "Impressora", 50, true],
	["alarme", "Alarme", 10, true],
	["ventilador", "Ventilador", 25, true],
	["ar", "Ar-condicionado", 150, true]
];
var quartoProgresso = 0;
var quartoFaltando = 335;

const banheiroMapa = document.getElementsByName("mapaBanheiro");
var banheiroObjetos = [
	["notebook", "Notebook", 100, true],
	["caixasom", "Caixa-som", 25, true],
	["lavaroupa", "Lava-roupa", 150, true],
	["chuveiro", "Chuveiro", 125, true],
	["secador", "Secador", 25, true]

];
var banheiroProgresso = 0;
var banheiroFaltando = 425;

//jogador
var comodoObjetos = [cozinhaObjetos, salaObjetos, quartoObjetos, banheiroObjetos];
var jogadorComodo = 0;
var jogadorProgresso = [cozinhaProgresso, salaProgresso, quartoProgresso, banheiroProgresso];
var jogadorEnergiaFaltando = [cozinhaFaltando, salaFaltando, quartoFaltando, banheiroFaltando];
var jogadorEconomia = 0;




// Função para parar o temporizador e calcular a pontuação
function finalizarTemporizador() {
   
    calcularPontuacao();  // Chama a função de calcular a pontuação
}

// Função para calcular a pontuação baseada no tempo
function calcularPontuacao() {
    var pontuacao = Math.max(1000 - jogadorEconomia * 10, 0);  // Exemplo: 1000 pontos - 10 pontos por segundo

	document.getElementById('pontuacaoFinal').innerHTML = pontuacao * (jogadorEconomia * 30);
	document.getElementById('energiaFinal').innerHTML = jogadorEconomia;
}

function mudarTela(mapa){
	fundoJogo.src = comodoImagens[mapa];
	
	jogadorComodo = mapa;
	comodoAtual = comodos[mapa];
	    console.log(tempoTotal, tempoFinal, tempoInicial)
		console.log(jogadorComodo, comodoAtual)

	if (mapa <= 1) {
		document.getElementById('btn_voltar').style.visibility = "hidden";
	}

	if (mapa != 0) { 
		interfaceHUD.style.visibility = "hidden";
		document.getElementById('btn_proximo').style.visibility = "hidden"; 
	}

	if (mapa != 0) { 
		interfaceHUD.style.visibility = "visible"; 
	}

	if (mapa == 1) {
		

		document.getElementById('btn_voltar').style.visibility = "hidden"; 
		document.getElementById('btn_proximo').style.visibility = "visible"; 
	}

	if (mapa > 1) {
		document.getElementById('btn_voltar').style.visibility = "visible"; 
		document.getElementById('btn_proximo').style.visibility = "visible"; 
	}

	if (mapa <= 3){
		document.getElementById('btn_proximo').innerHTML = "PROXIMO";
	}

	if (mapa > 3) {
		document.getElementById('btn_proximo').innerHTML = "FINALIZAR";
	}

	if (mapa != 5) {
		document.getElementById('telaFinal').style.visibility = "hidden";
	}

	if (mapa == 5) {
		finalizarTemporizador();  // Finaliza o temporizador ao chegar na tela final
		document.getElementById('telaFinal').style.visibility = "visible";  // Exibe a tela final
		interfaceHUD.style.visibility = "hidden";
		document.getElementById('btn_voltar').style.visibility = "hidden"; 
		document.getElementById('btn_proximo').style.visibility = "hidden"; 
		
	}

	document.getElementById('consumoQuarto').innerHTML = comodos[jogadorComodo];
	consumoAtual.innerHTML = comodoConsumoInicial[mapa - 1];
	
	fundoJogo.setAttribute('usemap', comodoMapas[mapa]);
	
	$(document).ready(function () {
        'use strict';
	 $('img[usemap]').mapster({
  mapKey: 'data-key',
  fillColor: 'ffffff',
  fillOpacity: 0.0,
  highlight: true,
  isSelectable: true,
  isDeselectable: false,
  stroke: true,
  strokeColor: 'ffffff',
  strokeWidth: 2, 
  scaleMap: true,  
	//imagens alternativas para ligar/desligar
	altImages: {
 		altcozinha: 'assets/comodos/cozinha2.png',
		altsala1: 'assets/comodos/sala2.png',
		altsala2: 'assets/comodos/sala3.png',
		altquarto1: 'assets/comodos/quarto2.png',
		altquarto2: 'assets/comodos/quarto3.png',
		altbanheiro: 'assets/comodos/banheiro2.png'
		
	},
	areas: [
		{key: 'tela', highlight: false, isSelectable: false},
		{key: 'final', highlight: false, isSelectable:false},
		{key: 'geladeira', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altcozinha'}},
		{key: 'microondas', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altcozinha'}},
		{key: 'fogão', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altcozinha'}},
		{key: 'tostadora', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altcozinha'}},
		{key: 'cafeteira', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altcozinha'}},
		{key: 'televisão', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altsala1'}},
		{key: 'telefone', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altsala1'}},
		{key: 'videogame', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altsala1'}},
		{key: 'ventcond', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altsala1'}},
		{key: 'luminaria', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altsala1'}},
		{key: 'pc', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altquarto1'}},
		{key: 'impressora', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altquarto1'}},
		{key: 'alarme', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altquarto1'}},
		{key: 'ventilador', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altquarto1'}},
		{key: 'ar', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altquarto2'}},
	        {key: 'notebook', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altbanheiro'}},
		{key: 'caixasom', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altbanheiro'}},
		{key: 'lavaroupa', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altbanheiro'}},
		{key: 'chuveiro', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altbanheiro'}},
		{key: 'secador', render_select: {stroke: false, fillOpacity: 1, altImageOpacity: 1, altImage: 'altbanheiro'}}
	       
	       
	       ]
	
});})
	
}

function objetoClicado(objetoNome){
	var objetos = comodoObjetos[jogadorComodo - 1];
	var objetoAtual = objetos[objetoNome]
	
	if(!objetoAtual[3]){
		return;
	} else {
		objetoAtual[3] = false;
		jogadorProgresso[jogadorComodo - 1] += objetoAtual[2];
		jogadorEnergiaFaltando[jogadorComodo - 1] = jogadorEnergiaFaltando[jogadorComodo - 1] - objetoAtual[2];

		let resultado = jogadorProgresso[jogadorComodo - 1].toString();
		economiaTotal.innerHTML = resultado;

		jogadorEconomia += objetoAtual[2];
	}
	
	consumoAtual.innerHTML = (comodoConsumoInicial[jogadorComodo - 1] - jogadorProgresso[jogadorComodo - 1]).toString();

	if(jogadorEnergiaFaltando[jogadorComodo - 1] == 0){
		//
	}
}

function proximoComodo(opcao){
	switch(opcao){
		case 'anterior':
			mudarTela(jogadorComodo-1);
		break;
		case 'proximo':
			mudarTela(jogadorComodo+1);
		break;
	}
}




// PHONES

let eventoToque = 'ontouchstart' in window ? 'touch' : 'clique';
