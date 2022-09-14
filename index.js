class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.categoria = categoria;
    }
}
const productosId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const nombres = ["remera", "carlo", "campera", "pantalon", "zapatillas", "gorra", "buzo", "camisa", "pantaloneta", "remera", "campera", "pantalon", "zapatillas", "gorra", "buzo", "camisa", "pantaloneta", "remera", "campera", "pantalon"];

const categoria = ["hombre", "mujer", "nino", "nina", "calzado", "accesorios"];

const productosAr = [];

for (let productoS of productosId) {
    roductosAr.push(new Producto(productosId[productoS], nombres[Math.floor(Math.random() * 20)], Math.floor(Math.random() * 1000), categoria[Math.floor(Math.random() * 6)]));
}

function elegir() {
    let productoelegido = prompt("ingresar producto")
    console.log(productosAr[parseInt(productoelegido)])
}
for (let index = 0; index < 5; index++) {
    elegir();
}

