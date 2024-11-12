function prod(produto){

    let btn = parseInt(produto)
        switch(btn){
        case 1: alert("Quantidade: " + btn)
        let roupa1 = document.querySelector("#calca").value
        let valor1 = parseFloat (document.querySelector("#valor1").value)
        let qtd1 = parseInt (document.querySelector("#qtd1").value)
        let total1 = valor1 * qtd1
        alert(total1)
        //alert("\n Peça: " + roupa1 + "\n Valor: R$" + valor1 + "\n Quantidade: " + qtd1 + "\n Total:" + total1)
        break

        case 2: alert("Quantidade: " + btn)
        let roupa2 = document.querySelector("#cardigan").value
        let valor2 = parseFloat (document.querySelector("#valor2").value)
        let qtd2 = parseInt (document.querySelector("#qtd2").value)
        let total2 = valor2 * qtd2
        alert(total2)
        break
    
        case 3: alert("Quantidade: " + btn)
        let roupa3 = document.querySelector("#regata").value
        let valor3 = parseFloat (document.querySelector("#valor3").value)
        let qtd3 = parseInt (document.querySelector("#qtd3").value)
        let total3 = valor3 * qtd3
        alert(total3)
        break

        case 4: alert("Quantidade: " + btn)
        let roupa4 = document.querySelector("#vestido").value
        let valor4 = parseFloat (document.querySelector("#valor4").value)
        let qtd4 = parseInt (document.querySelector("#qtd4").value)
        let total4 = valor4 * qtd4
        alert(total4)
        break

        case 5: alert("Quantidade: " + btn)
        let roupa5 = document.querySelector("#vestido").value
        let valor5 = parseFloat (document.querySelector("#valor5").value)
        let qtd5 = parseInt (document.querySelector("#qtd5").value)
        let total5 = valor5 * qtd5
        alert(total5)
        break

        case 6: alert("Quantidade: " + btn)
        let roupa6 = document.querySelector("#tenis").value
        let valor6 = parseFloat (document.querySelector("#valor6").value)
        let qtd6 = parseInt (document.querySelector("#qtd6").value)
        let total6 = valor6 * qtd6
        alert(total6)
        break
       
        
    }


    //alert("\n Peça: " + roupa1 + "\n Valor: R$" + valor1 + "\n Quantidade: " + qtd1 + "\n Total:" + total1)
}