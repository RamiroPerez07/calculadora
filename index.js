function cleanDisplay(){
    $displayFrames = document.getElementsByClassName("display-frames")
    console.log($displayFrames)
    $displayFrames = [...$displayFrames]
    console.log($displayFrames)
    $displayFrames.forEach(obj => {
        obj.textContent = "";
    });
}

function addDigitToDisplay(btn){
    $displayFrame = document.getElementById("operations-frame")
    let texto_actual = $displayFrame.textContent
    $displayFrame.textContent = texto_actual+btn.textContent;
}

const $btnClean = document.getElementById("btn-clean")
$btnClean.addEventListener("click", cleanDisplay);

let $btnsDigit = document.getElementsByClassName("digit")
$btnsDigit = [...$btnsDigit]

console.log($btnsDigit)





