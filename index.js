var acumDig = []
var acumOp = []

let $displayFrame = document.getElementById("operations-frame")
let $displayResultado = document.getElementById("results-frame")
let $displayFrames = document.getElementsByClassName("display-frames")
$displayFrames = [...$displayFrames]

function cleanDisplay(){
    $displayFrames.forEach(obj => {
        obj.textContent = "";
    });
    acumDig = []
    acumOp = []
}

function addDigitToDisplay(event){
    let resultado = $displayResultado.textContent;
    if (resultado != ""){
        texto_actual = acumDig[acumDig.length-1]
        cleanDisplay();
    }else{
        texto_actual = $displayFrame.textContent
    }
    $displayFrame.textContent = texto_actual + event.currentTarget.textContent;
}

function addOperatorToDisplay(event){
    let resultado = $displayResultado.textContent
    let texto_actual;
    if (resultado  == ""){
        texto_actual = $displayFrame.textContent
        // console.log("el operador ingresado es" +texto_actual)
    }else{
        texto_actual = $displayResultado.textContent;
        $displayFrame.textContent = texto_actual;
    }

    //actualizo los vectores que llevan las operaciones
    acumDig.push(texto_actual);
    acumOp.push(event.currentTarget.textContent)

    addDigitToDisplay(event);
}

function calculate(){

    //obtengo el ultimo numero enviado
    let texto_actual = $displayFrame.textContent
    let ult_dig = texto_actual.split(acumOp[acumOp.length-1])[1]
    texto_actual = parseFloat(ult_dig)
    acumDig.push(texto_actual);

    a = parseFloat(acumDig[acumDig.length-2])
    b = parseFloat(acumDig[acumDig.length-1])
    //console.log(a,b)

    let resultado;

    switch(acumOp[acumOp.length-1]){
        case "/":
            resultado = a/b;
            break;
        case "*":
            resultado = a*b;
            break;
        case "+":
            resultado = a+b;
            break;
        case "-":
            resultado = a-b;
            break;
        default:
            resultado = null;
            console.log("La operación no pudo identificarse")
            break;
    }

    $displayResultado = document.getElementById("results-frame")
    $displayResultado.textContent = resultado != null? resultado.toFixed(2): "Error"

    acumDig.push(resultado)
}

//boton limpiar
const $btnClean = document.getElementById("btn-clean")
$btnClean.addEventListener("click", cleanDisplay);

//botones de numeros
let $btnsDigit = document.getElementsByClassName("digit")
$btnsDigit = [...$btnsDigit]

$btnsDigit.forEach( (obj) =>{
    obj.addEventListener("click", addDigitToDisplay)
})

//botones de operaciones
let $btnsOp = document.getElementsByClassName("operator")
$btnsOp = [...$btnsOp]

$btnsOp.forEach((obj)=>{
    obj.addEventListener("click", addOperatorToDisplay)
})

//boton de resultado
let $btnEqual = document.getElementById("btn-equal")
$btnEqual.addEventListener("click", calculate)







