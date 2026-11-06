function divisori(){
    let n;
    n = document.getElementById("numero").value;
    let array = [];
    if(
        n != null && 
        n != "" &&
        n >= 0 &&
        !isNaN(n)
    ){
        n = parseInt(n);
        let cont = 0;
        for(let i=0; i <= n; i++){
            if(n % i == 0){
                array.push(i);
                cont++;
            }
        }
        if(cont == 2){
            document.getElementById("risultatoRosso").innerHTML ="divisori sono: " + cont + "<br> il numero è primo";
            document.getElementById("risultato").innerHTML ="";
            document.getElementById("risultatoZero").innerHTML ="";
        }
        else if(cont == 0){
            document.getElementById("risultatoZero").innerHTML ="il numero 0 non ha divisori";
            document.getElementById("risultato").innerHTML ="";
            document.getElementById("risultatoRosso").innerHTML ="";
        }
        else{
        document.getElementById("risultato").innerHTML ="divisori sono: " + cont;
        document.getElementById("risultatoRosso").innerHTML ="";
        document.getElementById("risultatoZero").innerHTML ="";
        }
        document.getElementById("array").innerHTML = array.join("- ");
    }
}