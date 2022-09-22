let Operacion = {
    a: 0,
    b: 0,
    operator: "",
    resultado: "",
    reset: function (){
        this.a = 0;
        this.b = 0;
        this.operator = "";
        this.resultado = ""
    },
    add: function (){
        this.resultado = this.a + this.b;
        return this.resultado;
    },
    subtract: function (){
        this.resultado = this.a - this.b;
        return this.resultado;
    },
    multiply: function (){
        this.resultado = this.a * this.b;
        return this.resultado;
    },
    divide: function (){
        this.b!=0?this.resultado = this.a / this.b:alert("Error: Denominador igual a 0");
        return this.resultado;
    }
}

let $displayFrame = document.getElementById("operations-frame")
let $displayResultado = document.getElementById("results-frame")
let $displayFrames = document.getElementsByClassName("display-frames")
$displayFrames = [...$displayFrames]

function cleanDisplay(){
    $displayFrames.forEach(obj => {
        obj.textContent = "";
    });
    Operacion.reset()
}

//event.currentTarget.textContent  => accedo al valor del elemento que se pasa

function updateNumbers(){
    Operacion.a = parseFloat($displayFrame.textContent.split(Operacion.operator)[0])
    Operacion.b = parseFloat($displayFrame.textContent.split(Operacion.operator)[1])
    console.log("a vale: "+Operacion.a+ " y b vale: "+Operacion.b )
}

function addDigitToDisplay(event){

    if (event.currentTarget.classList[1] == "operator" && $displayResultado.textContent != ""){
        $displayFrame.textContent = $displayResultado.textContent;
        $displayResultado.textContent = "";
    }

    if (event.currentTarget.classList[1] == "digit" && $displayResultado.textContent != ""){
        $displayResultado.textContent = "";
        $displayFrame.textContent = ""
    }

    $displayFrame.textContent += event.currentTarget.textContent //agrego el digito al display
    updateNumbers()

}


function addOperatorToDisplay(event){

    if(Operacion.operator ==""){
        Operacion.operator = event.currentTarget.textContent;
        addDigitToDisplay(event);
    }
}


function calculate(){

    if(isNaN(Operacion.a) || isNaN(Operacion.b)){
        return;
    }

    switch(Operacion.operator){
        case "+":
            Operacion.add()
            break;
        case "-":
            Operacion.subtract()
            break;
        case "*":
            Operacion.multiply()
            break;
        case "/":
            Operacion.divide()
            break;
        default:
            Operacion.resultado = null;
            console.log("No se ha ingresado una operación válida")
            break;
    }
    $displayResultado.textContent = Operacion.resultado;
    Operacion.reset()
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







