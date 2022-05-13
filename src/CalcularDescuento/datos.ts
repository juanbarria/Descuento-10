let precioProducto = document.getElementById("precioProducto");
let btnPrecioFinal = document.getElementById("btnPrecioFinal");

btnPrecioFinal.addEventListener("click", () => {
  let ingresarPrecio: number = Number(precioProducto.value);
  console.log("El Descuento es:", ingresarPrecio * 0.9);
});

/*let precioProducto: number = 450.5;
let porcentajeDescuento: number = 0.9;
/*let descuento: number = precioProducto * porcentajeDescuento;*/
/*let precioFinal: number = precioProducto * porcentajeDescuento;
btnPrecioFinal.addEventListener("click", () => {
  console.log("El Descuento es:", precioFinal);
});*/
