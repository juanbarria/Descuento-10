let precioProducto: number = 450.5;
let porcentajeDescuento: number = 0.1;
let descuento: number = precioProducto * porcentajeDescuento;
let precioFinal: number = precioProducto - descuento;
btnPrecioFinal.addEventListener("click", () => {
  console.log("El Descuento es:", precioFinal);
});
