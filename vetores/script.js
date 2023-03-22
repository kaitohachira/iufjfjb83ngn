var objetos = []

function disparar(){
    let input = document.getElementById('input').value

    if(input == '' ){
        alert('Informe um valor válido')
    }
    else if(objetos.indexOf(input) !== -1){
        alert('Objeto já foi adicionado')
    }else{
        objetos.push(input)
        console.log(objetos)
    }
    
}

function Ordenar(){
    objetos.sort()
    console.log(objetos)
}