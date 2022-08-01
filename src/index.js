const express =  require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.PORT || 9000
const productosrput = require('./routes/productos')


app.use(express.json())
app.use(cors({
    origin:"*",
    methods: ["GET", "POST","DELETE", "PUT", "PATCH"],
  }
))
app.use('/', productosrput)


app.get("/", (req, res) => {
    res.send('si perra lo lograras')
})


mongoose.connect(process.env.MONGODB_URI).then(() => console.log('conectado a mongodb atlas'))
.catch(err => console.log(err))




app.listen(port, () => console.log('server listo'))