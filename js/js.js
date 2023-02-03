// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 5,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 20,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 10,
    },

];
function fillInFields() {
    for (position in products) {

        var producto = document.createElement("div");
        producto.setAttribute("class", "product");
        var productList = document.getElementById("productList");
        productList.appendChild(producto);

        var divIndex = document.createElement("div");
        divIndex.setAttribute("class", "divIndex");
        var index = (parseFloat(position) + 1);
        divIndex.textContent = innerHTML = index;
        producto.appendChild(divIndex);

        var divDescription = document.createElement("div");
        divDescription.setAttribute("class", "divDescription");
        var description = products[position].description;
        divDescription.textContent = innerHTML = description;
        producto.appendChild(divDescription);


        var input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("value", products[position].units);
        producto.appendChild(input);
    }
}
//Para habilitar o deshabilitar el botón de calcular
var units = 0;
for (posicion in products) {
    units = units + products[posicion].units;
    if (units == 0) {
        document.getElementById("buttonResult").disabled = true;
    } else {
        document.getElementById("buttonResult").disabled = false;  
    }
}
//Realizar las sumas de Subtotal, IVA y total
resultSubtotal = document.getElementById("buttonResult").addEventListener("click", function () {
    var priceSubtotalAllProducts = 0;
    var priceIvaAllProducts = 0;
    for (position in products) {
        //la suma de la cantidad y el iva de cada producto
        var productPrice = products[position].price;
        var productAmount = products[position].units;
        var priceSubtotal = productPrice * productAmount;
        var priceIva = (products[position].units * products[position].price * products[position].tax / 100)

        // la suma de todos los productos (del subtotal, iva y total)
        priceSubtotalAllProducts = priceSubtotalAllProducts + priceSubtotal;
        priceIvaAllProducts = priceIvaAllProducts + priceIva;
        var priceTotal = priceSubtotalAllProducts + priceIvaAllProducts;
    }
    //Para visualizar en el html
    document.getElementById("subtotalInput").value = priceSubtotalAllProducts;
    document.getElementById("ivaInput").value = priceIvaAllProducts;
    document.getElementById("totalInput").value = priceTotal;
})

fillInFields()

