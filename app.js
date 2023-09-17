// creating Calcualator

function dabaya(e){

    var inputField = document.getElementById('inp');
    inputField.value += e;
}

function eq(){  
    var a = document.getElementById('inp')
    a.value =eval(a.value)
}

function calculatePercentage() {
    var inputField = document.getElementById('inp');
    var expression = inputField.value;
    var result = eval(expression) / 100;
    inputField.value = result;
}


