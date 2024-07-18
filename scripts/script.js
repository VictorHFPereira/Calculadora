function calcular(n1,n2){
    //Obter os valores dos campos e converter em números
    var n1 = parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)
    var resultado;
    var Porcentagem=100;

    //Verificar se os campos estão vazios
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos!";
        return; 
    }
    
    //Obter o operador selecionado
    selector = document.getElementById("selector").value

    //Realizar cálculo com base no operador selecionado
        switch(selector){
            
            //Soma
            case '+':
                calculo = (n1 + n2);
                document.getElementById("resultado").innerHTML = `o resultado da soma de ${n1} + ${n2} é = ${calculo}`
                break

            //Subtração
            case '-':
                calculo = (n1 - n2);
                document.getElementById("resultado").innerHTML = `o resultado da subtração de ${n1} - ${n2} é = ${calculo}`
                break
            
            //Multiplicação
            case '*':
                calculo = (n1 * n2);
                document.getElementById("resultado").innerHTML = `o resultado da multiplicação de ${n1} * ${n2} é = ${calculo}`
                break       

            //Divisão
            case '/':
                calculo = Math.round((n1 / n2)); //Arredondamento dos resultados
                if(Number.isNaN(calculo)){ //Se o número não for divisível(0) retornar mensagem para a troca, senão continuar operação.
                    document.getElementById("resultado").innerHTML = `Digite um divisível válido!`
                } else {    
                document.getElementById("resultado").innerHTML = `o resultado da divisão de ${n1} / ${n2} é = ${calculo}`
                break
                }
            
            //Potenciação
            case '^':
                calculo = Math.pow(n1,n2);
                document.getElementById("resultado").innerHTML = `o resultado da potenciação de ${n1} ^ ${n2} é = ${calculo}`
                break       
            
            //Porcentagem
            case '%':
                calculo = (n1/Porcentagem)*n2;          
                document.getElementById("resultado").innerHTML = `${n1}% de ${n2} é = ${calculo}`
        }
}   
