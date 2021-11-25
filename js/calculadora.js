function calc(event, e){
    event.preventDefault();
    var operacao = e.value;
    
    var n1=parseFloat(document.getElementById("numero1").value);
    var n2=parseFloat(document.getElementById("numero2").value);
    
    var calculo = eval(n1+operacao+n2);
 
    if(!isNaN(calculo)){
        let myElm = document.createElement("span");
        document.getElementById("result").appendChild(myElm);
        myElm.innerHTML = document.getElementById("numero1").value + operacao + document.getElementById("numero2").value + " = " + calculo;
    };
   
}