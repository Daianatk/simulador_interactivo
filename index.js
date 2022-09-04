cotizar = (precio, cantidad) => {
    return precio * cantidad * 1.18
}
for (let index = 0; index < 5; index++) {
    let producto = prompt ("Bienvenido a Mi Cotizador \nIngrese nombre del producto");
    let resultado = cotizar(parseFloat(prompt("Ingresar Precio")),parseFloat(prompt("Ingresar Cantidad")));
    alert("El precio del producto " + producto + " es: " + resultado + " Inc. IGV");
    document.write("El precio del producto " + producto + " es: " + resultado + " Inc. IGV\n ");
}

