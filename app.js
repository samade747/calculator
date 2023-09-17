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



// document.addEventListener('keydown', function(event) {
//     var key = event.key;

//     if (key >= '0' && key <= '9') {
//         dabaya(key);
//     } else if (key === '+' || key === '-' || key === '*' || key === '/') {
//         dabaya(key);
//     } else if (key === '%' || key === 'Enter') {
//         event.preventDefault(); 
//         calculatePercentage();
//     } else if (key === 'Backspace') {
//         document.getElementById('inp').value = document.getElementById('inp').value.slice(0, -1);
//     } else if (key === 'Escape') {
//         document.getElementById('inp').value = '';
//     }
// });

document.addEventListener('keydown', function(event) {
    var key = event.key;

    if (key >= '0' && key <= '9') {
        dabaya(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        dabaya(key);
    } else if (key === '%' && !document.getElementById('inp').value.includes('%')) {
        calculatePercentage();
    } else if (key === 'Enter') {
        event.preventDefault(); 
        eq();
    } else if (key === 'Backspace') {
        document.getElementById('inp').value = document.getElementById('inp').value.slice(0, -1);
    } else if (key === 'Escape') {
        document.getElementById('inp').value = '';
    }
});
