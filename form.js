function sum(){
    var a,b,result;
    a = Number(document.getElementById('first').value);
    b = Number(document.getElementById('second').value);
    result = a+b;
    document.getElementById('answer').value = result;
}   