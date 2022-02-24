const express = require("express")
require("dotenv").config()
const app = express()
const bodyParser = require("body-parser")
const userRouter = require("./routers/userRouter")

app.use(bodyParser.json())
app.use("/",userRouter)

const connect  = require("./db/db")
connect()


app.get("/",(req,res)=>{
    res.send("hello")
})

const PORT  = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Node server running on ${PORT}`)
})