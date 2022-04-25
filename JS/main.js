const BaseDeDatos = {
    remera: {
        nombre: "remera Darth Vader",
        precio: 1500
    },
    pantalon: {
        nombre: "pantalon TIE",
        precio: 6000
    },
    campera: {
        nombre: "campera StormTrooper",
        precio: 7500
    },
    zapatillas: {
        nombre: "zapatillas Yoda",
        precio: 11000
    }
}
let nombre = prompt('Bienvenido, ¿como se llama?');
desicion = prompt(`${nombre} ¿desea comprar o jugar?`).toUpperCase();
let elegirProductos, totalAPagar, metodo_pago, productoElegido, selectionCuotas, precioXCuota;
const iva = 0.21;
const descuento = 0.10;
const interesTres = 0.15;
const interesSeis = 0.25;
const interesDoce = 0.45;


const precioRemera = BaseDeDatos.remera.precio + (BaseDeDatos.remera.precio * iva);
const precioPantalon = BaseDeDatos.pantalon.precio + (BaseDeDatos.pantalon.precio * iva);
const precioCampera = BaseDeDatos.campera.precio + (BaseDeDatos.campera.precio * iva);
const precioZapatillas = BaseDeDatos.zapatillas.precio + (BaseDeDatos.zapatillas.precio * iva);

const comprar = () => {
    let b = "SI"
    for (let i = 0; b.toUpperCase() === "SI"; i++) {
        elegirProductos = prompt(`Tenemos para ofrecerle los siguientes productos: 
            A) Producto: ${BaseDeDatos.remera.nombre} Precio: $ ${precioRemera} 
            B) Producto: ${BaseDeDatos.pantalon.nombre} Precio: $ ${precioPantalon}
            C) Producto: ${BaseDeDatos.campera.nombre} Precio: $ ${precioCampera}
            D) Producto: ${BaseDeDatos.zapatillas.nombre} Precio: $ ${precioZapatillas}`).toUpperCase();
        if (elegirProductos === "A" || elegirProductos === "B" || elegirProductos === "C" || elegirProductos === "D") {
            switch (elegirProductos) {
                case "A":
                    const a = formaDePago();
                    productoElegido = precioRemera;
                    if (a === "EFECTIVO") {
                        totalAPagar = productoElegido - (productoElegido * descuento);
                        alert(`${nombre} el producto le sale: $ ${totalAPagar} Gracias por su compra`)
                    } else if (a === "TARJETA") {
                        tarjeta();
                    }
                    break;
                case "B":
                    const b = formaDePago();
                    productoElegido = precioPantalon;
                    if (b === "EFECTIVO") {
                        totalAPagar = productoElegido - (productoElegido * descuento);
                        alert(`${nombre} el producto le sale: $ ${totalAPagar} Gracias por su compra`)
                    } else if (b === "TARJETA") {
                        tarjeta();
                    }
                    break;
                case "C":
                    const c = formaDePago();
                    productoElegido = precioCampera;
                    if (c === "EFECTIVO") {
                        totalAPagar = productoElegido - (productoElegido * descuento);
                        alert(`${nombre} el producto le sale: $ ${totalAPagar} Gracias por su compra`)
                    } else if (c === "TARJETA") {
                        tarjeta();
                    }
                    break;
                case "D":
                    const d = formaDePago();
                    productoElegido = precioZapatillas;
                    if (d === "EFECTIVO") {
                        totalAPagar = productoElegido - (productoElegido * descuento);
                        alert(`${nombre} el producto le sale: $ ${totalAPagar} Gracias por su compra`)
                    } else if (d === "TARJETA") {
                        tarjeta();
                    }
                    break;
            }
        } else {
            let repreguntar = prompt(`Lo siento ${nombre} no contamos con ese producto, ¿desea elegir alguno de los ofrecidos? SI/NO`).toUpperCase();
            if (repreguntar === "SI") {
                comprar();
            } else {
                let repreguntar = prompt(`${nombre} ¿desea jugar? SI/NO`).toUpperCase();
                if (repreguntar === "SI") {
                    jugar();
                } else {
                    alert("Gracias por visitarnos")
                }
            }
        }
        b = prompt(`${nombre} ¿Desea seguir comprando? SI/NO`);
    }
}


function formaDePago() {
    do {
        metodo_pago = prompt(`${nombre} Ingrese el metodo de pago: Efectivo o Tarjeta`).toUpperCase();
        if (metodo_pago == "EFECTIVO" || metodo_pago == "TARJETA") {
            break;
        } else {
            alert("Seleccione una de las opciones dadas")
        }
    } while (metodo_pago != "EFECTIVO" || metodo_pago != "TARJETA");
    if (metodo_pago === "EFECTIVO") {
        return eleccion = "EFECTIVO"
    } else if (metodo_pago === "TARJETA") {
        return eleccion = "TARJETA"
    }
}
function tarjeta() {
    do {
        selectionCuotas = prompt(`${nombre} Elija la cantidad de cuotas: 
         A) 3 cuotas con un 15% de recargo
         B) 6 cuotas con un 25 % de recargo
         C) 12 cuotas con un 45 % de recargo`).toUpperCase();
        if (selectionCuotas === "A" || selectionCuotas === "B" || selectionCuotas === "C") {
            break;
        } else {
            alert("Seleccione una de las opciones dadas")
        }
    } while (selectionCuotas != "A" || selectionCuotas != "B" || selectionCuotas != "C");

    if (selectionCuotas === "A") {
        totalAPagar = productoElegido + (productoElegido * interesTres);
        precioXCuota = totalAPagar / 3;
        alert(`${nombre} el producto le queda a: $ ${totalAPagar} y cada cuota tiene un valor de: $ ${precioXCuota} gracias por su compra`);
    } else if (selectionCuotas === "B") {
        totalAPagar = productoElegido + (productoElegido * interesSeis);
        precioXCuota = totalAPagar / 6;
        alert(`${nombre} el producto le queda a: $ ${totalAPagar} y cada cuota tiene un valor de: $ ${precioXCuota} gracias por su compra`);
    } else if (selectionCuotas === "C") {
        totalAPagar = productoElegido + (productoElegido * interesDoce);
        precioXCuota = totalAPagar / 12;
        alert(`${nombre} el producto le queda a: $ ${totalAPagar} y cada cuota tiene un valor de: $ ${precioXCuota} gracias por su compra`);
    }
}
const jugar = () => {
    const respuestaUno = {
        respUno: "OBIWAN KENOVI",
        respDos: "C"
    }
    const preguntaUno = () => {
        let respuesta = prompt(`${nombre}, ¿Quien fue el maestro de Anakin Skywalker?
        A)Ahsoka Tano, B)Maestro Joda, C)Obiwan Kenovi, D)Conde Dooku`).toUpperCase();
        if (respuesta == respuestaUno.respUno || respuesta == respuestaUno.respDos) {
            alert("acerto, siguiente pregunta")
        } else {
            alert("Incorrecto, suerte en la siguiente pregunta")
        }
    }
    preguntaUno();
    const respuestaDos = {
        respUno: "R2D2",
        respDos: "A"
    }
    const preguntaDos = () => {
        let respuesta = prompt(`${nombre}, ¿Quien fue el droide de Anakin Skywalker?
        A)R2D2, B)BB-8, C)C-3PO, D)Otro`).toUpperCase();
        if (respuesta == respuestaDos.respUno || respuesta == respuestaDos.respDos) {
            alert("Acerto, siguiente pregunta")
        } else {
            alert("Incorrecto, suerte en la siguiente pregunta");
        }
    }
    preguntaDos();
    const respuestaTres = {
        respUno: "LUKE SKYWALKER",
        respDos: "D"
    }
    const preguntaTres = () => {
        let respuesta = prompt(`${nombre}, ¿Quien destruyo la estrella de la muerte?
        A)Han Solo, B)Princesa Leia, C)Darth Vader, D)Luke Skywalker`).toUpperCase();
        if (respuesta == respuestaTres.respUno || respuesta == respuestaTres.respDos) {
            alert("Acerto, siguiente pregunta")
        } else {
            alert("Incorrecto, suerte en la siguiente pregunta")
        }
    }
    preguntaTres();
    const respuestaCuatro = {
        respUno: "LUKE YO SOY TU PADRE",
        respDos: "B"
    }
    const preguntaCuatro = () => {
        let respuesta = prompt(`${nombre}, ¿Cual es la frese correcta?
        A)Luke, eres mi hijo, B)Luke, yo soy tu padre, C)Luke, somos familia, D)Luke, soy tu padre`).toUpperCase();
        if (respuesta == respuestaCuatro.respUno || respuesta == respuestaCuatro.respDos) {
            alert("Acerto, gracias por jugar")
        } else {
            alert("Incorrecto, suerte en la proxima")
        }
    }
    preguntaCuatro()

    let repreguntar = prompt(`${nombre}, ¿desea volver a jugar? SI/NO`).toUpperCase();
    if (repreguntar === "SI") {
        jugar();
    } else {
        let repreguntar = prompt(`${nombre} ¿desea comprar? SI/NO`).toUpperCase();
        if (repreguntar === "SI") {
            comprar();
        } else {
            alert("Gracias por su visita")
        }
    }
}

if (desicion === "COMPRAR") {
    comprar();
} else if (desicion === "JUGAR") {
    jugar();
}




