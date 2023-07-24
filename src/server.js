const express = require("express"); //importanto express 

const app = express(); //inicializando express

const PORT = 3333;//definindo a porta de execução

app.listen(PORT, () => console.log(`Server in running on Port ${PORT}`))