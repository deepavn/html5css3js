
function show_product(pname) {
    return "Product Name: " + pname;
}

let product_name = "Watch";

document.getElementById("myContent").innerHTML =show_product(product_name);

 /*
// Update 1 ****************************************************************

function show_product(pname:string) {
    return "Product Name: " + pname;
}

let product_name = "Watch"; // change "watch" to 100. See what happens.

document.getElementById("myContent").innerHTML =show_product(product_name);

// Update 2 ****************************************************************

interface Product {
    productname: string;
    productprice: number;
}

function show_product(product: Product) {
    return "Product Name: " + product.productname + "; Product Price: " + product.productprice;
}

let p = { productname: "Watch", productprice: 1750 };

document.getElementById("myContent").innerHTML = show_product(p);



// Update 3  ****************************************************************
interface iProduct {
    productname: string;
    productprice: number;
}

class Product {
    productdesc: string;
    constructor(public productname: string, public productprice: number) {
        this.productdesc = "This product " + productname + " has a blue dial. It is priced at: " + productprice
    }
}

let p = new Product('Watch', 3455)

function show_product(product: Product) {
    return "<b>Product Name:</b> " + product.productname + "<br/>"
        + "<b>Product Price:</b> $" + product.productprice  + "<br/>"
        + "<b>Product Desc:</b> " + product.productdesc;
}

document.getElementById("myContent").innerHTML = show_product(p);
*/
