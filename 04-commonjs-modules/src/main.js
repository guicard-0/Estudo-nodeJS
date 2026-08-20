const p = require("./Services/products")

async function main() {
    console.log("Carrinho:"); 
    
    p.getFullname("408", "mousepad");
    p.getFullname("410", "mouse");
    p.getProductLabel("mousepad");
}

main();
