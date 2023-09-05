function show(){
    var a,b;
    a = Number(document.getElementById('first').value);
    b = Number(document.getElementById('second').value);
    var operator = document.getElementById('opr').value;
     

    if (operator === "add") {
        
        document.getElementById("answer").value = a+b;
        
      } else if (operator === "sub") {
        
        document.getElementById("answer").value = a-b;
        
      } else if (operator === "multi") {
       
        document.getElementById("answer").value = a*b;
       
      } else if (operator === "div") {
       
        document.getElementById("answer").value = a/b;
      
      }
} 