let Fgeo = document.querySelector('#opcoesgeometricas')
let Fgeoselected = '#' 
let LFgeo = document.querySelector("#Lfgeo")
let resultado = document.querySelector('.resultado')
let AreaGeo = '#'
let ret = document.querySelector('.Retangulo')
let txtLFgeo = document.querySelector('.txt_Fgeo')
let LFgeo2 = document.querySelector('#Lfgeo2')
let altFG = document.querySelector('.altura_FG')



Fgeo.addEventListener('change', function (){
 Fgescolhido()
})
function Fgescolhido (){
    Fgeoselected = Fgeo.options[Fgeo.selectedIndex].text  
    
    switch(Fgeoselected){
    case "Quadrado":
        changeDisplay()
        txtLFgeo.innerHTML = `COMPRIMENTO DO QUADRADO`
    break;
    case "Triangulo":
        changeDisplay()
        txtLFgeo.innerHTML = `BASE DO TRIANGULO`
        altFG.innerHTML = `ALTURA DO TRIANGULO`
    break;
    case "Circulo":
        changeDisplay()
         txtLFgeo.innerHTML = `RAIO DO CIRCULO`
        break;
    case "Retangulo":
        altFG.innerHTML = `ALTURA DO RETANGULO`
        txtLFgeo.innerHTML = `COMPRIMENTO DO RETANGULO`
        changeDisplay()
        break 
}

}

function calcularArea(){
    switch (Fgeoselected){
        case "Quadrado":
            AreaGeo = Math.pow(LFgeo.value, 2)
            ValidarValor()
            break
        case "Retangulo": 
            AreaGeo = LFgeo.value * LFgeo2.value
            ValidarValor()
            break
        case "Triangulo":
            AreaGeo = (LFgeo.value * LFgeo2.value ) / 2
            ValidarValor()
            break
        case "Circulo":
            AreaGeo = Math.pow(LFgeo.value, 2) * Math.PI
            ValidarValor()
            break
}
    console.log(Fgeoselected)
    resultado.innerHTML = `A area do ${Fgeoselected} é igual a ${AreaGeo} M²`
}

function changeDisplay(){
if(Fgeoselected === "Retangulo" || Fgeoselected === "Triangulo"){
    ret.setAttribute('style', 'display: flex')
} else { 
    ret.removeAttribute('style', 'display: flex')
}
}
function ValidarValor(){
    if (AreaGeo === 0 ){
        alert("ERRO! Verifique os valores preenchidos")
    }
}
