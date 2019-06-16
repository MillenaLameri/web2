var urlParams = new URLSearchParams(window.location.search);
var numero = Number(urlParams.get('numero'));
var op = urlParams.get('op');

switch(op){
case "pi":
//par ou impar
if(numero%2 == 0){
document.write("<h1> Numero é PAR </h1>");
}else{
document.write("<h1> Numero é IMPAR </h1>")
}
break;
case "primo":
//primo
var div = 2;
var x = 0;
var cont = 0;
var num = Number(numero);
    
    while(div < num){
        x = num % div;
        if(x === 0){
            cont++;
        }
        div++;
    }    
    
    if(cont === 0){
        document.write("<h1> É primo </h1>");
    }else{
        document.write("<h1> Não é primo </h1>");
    }
break;
default:
//dragon
document.write("<img src='imgs/dragon.png'>");
}
