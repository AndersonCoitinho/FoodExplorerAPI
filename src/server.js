const express = require("express"); //importanto express 

const routes = require("./routes")

const app = express(); //inicializando express
app.use(express.json());//API vai "entender" que vai receber as respostas em json

app.use(routes)

const PORT = 3333;//definindo a porta de execução

app.listen(PORT, () => console.log(`Server in running on Port ${PORT}`))