const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
    
    await mongoose.connect(`mongodb+srv://evertonsousa3557:xnyfPrjP6sNnLWSM@bibliotecaapi.aafwbke.mongodb.net/?retryWrites=true&w=majority`);
    console.log('Conectado ao banco!');
    
}

main().catch((err) => console.log(err));

module.exports = main;

