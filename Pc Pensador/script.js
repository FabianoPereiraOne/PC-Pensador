function jogar(){
    let num = document.getElementById("cxnum")
    let res = document.getElementById("res")
    let resul = document.getElementById("resul")
    let n = Number(num.value)
    res.innerHTML = ''
    resul.innerHTML = ''
    for( let c = 0; c <= 0; c++){
    let valor = 9
    let aleat = Math.round((Math.random() * valor)+1)

    if(num.value.length == 0 || n <= 0 || n> 10){
            window.alert('[ERRO] Digite um número válido!')
        }else{
            if(n == aleat){
               res.innerHTML = (`Você digitou ${n} e o computador ${aleat}`)
                resul.innerHTML= ('Você venceu!')
                resul.style.backgroundColor = 'green'
                num.value = ''
                num.focus()
            }else{
                res.innerHTML= (`Você digitou <b> ${n}</b> e o computador <b> ${aleat} </b>`)
                resul.innerHTML= ('Você perdeu!')
                resul.style.backgroundColor = 'red'
                num.value = ''
                num.focus()
            }
            
        }
        
}
}
