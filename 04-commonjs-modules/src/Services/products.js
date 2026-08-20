async function getFullname(codeId, productName) {
    console.log("\n")
    console.log("product: " + codeId + "--" + productName);
}

async function getProductLabel(productLabel) {
    console.log("Product: " + productLabel);   
}

module.exports = {
    getFullname,
    getProductLabel,
};