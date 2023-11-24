let altura= prompt("Ingrese su altura:");
let peso= prompt("Ingrese su peso: ");


function calculo(peso,altura) {
    let resultado= peso/(altura*altura);

    switch (resultado) {
        case (resultado < 18.5):
            alert("Su peso es INSUFIENTE");
            break;
        case (resultado >= 18.5 && resultado < 24.9):
            alert("Su peso es NORMAL");
            break;
        case (resultado >= 25.0 && resultado < 29.9):
            alert("Se encuentra en SOBREPESO");
            break;
        default:
            alert("OBESIDAD");
            break;
    }
}


