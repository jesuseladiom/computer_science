const boxResultado= document.querySelector("#resultados");

document.querySelector("#btn-enviar").addEventListener('click', primos)
document.querySelector("#btn-reiniciar").addEventListener('click', reiniciar)

function primos() {
    let n= document.querySelector("#numero").value;

    if (n>=2) {
        let contador=0;
        for(let i=2; i<n; i++) {
            if (n % i==0) {
                contador++;
                break;
            }
        }
    
        if (contador)
            boxResultado.innerHTML= '<div class="alert alert-warning">' + n + ' NO ES NUMERO PRIMO </div>';
        else
            boxResultado.innerHTML= '<div class="alert alert-warning">' + n + ' SI ES NUMERO PRIMO </div>';
    }
    else
        boxResultado.innerHTML= '<div class="alert alert-warning"> EL NUMERO DEBE DE SER >= 2</div>';

    
}

function reiniciar(){
    boxResultado.innerHTML= '';
    document.querySelector("#numero").value= ''
    return true;
}