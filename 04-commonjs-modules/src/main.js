const p = require("./Services/products")
const conf = require("./Services/config")
const dataBase = require("./Services/database")

async function main() {
    console.log("Carrinho:"); 
    
    p.getFullname("408", "mousepad");
    p.getProductLabel("Acessório");
    p.getFullname("410", "mouse");
    p.getProductLabel("Periférico");
    console.log("\n")
    console.log(conf.client);
    dataBase.connectToDatabase("Aguardando pagamento.");
    dataBase.disconnectToDatabase();

}

main();
