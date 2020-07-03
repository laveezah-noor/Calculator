
function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = ""
}

function getResult(){
    var result = document.getElementById("result");
    console.log(result.value);
    result.value = eval(result.value)
}

function backspace(){
    var result = document.getElementById("result");
    back =  result.value;
    result.value = back.slice(0,-1)
}
