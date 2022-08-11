const boxResultado= document.querySelector("#resultados");

document.querySelector("#btn-enviar").addEventListener('click', calcula)
document.querySelector("#btn-reiniciar").addEventListener('click', reiniciar)

function calcula() {
    let n= document.querySelector("#numero").value;

    for(let i=1; i<=n; i++) {
        if (i%2==0) 
            boxResultado.innerHTML+= '<div class="alert alert-warning">' + i + ' es par </div>';
        else
            boxResultado.innerHTML+= '<div class="alert alert-danger">' + i + ' es impar </div>';
    }
    
}

function reiniciar(){
    boxResultado.innerHTML= '';
    return true;
}