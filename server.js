const express=require('express')
const dotenv=require('dotenv')

//Loading config file
dotenv.config({path:'./config/config.env'})


const app = express()

const PORT = process.env.PORT||5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))

//Routes here
app.get('/', (req,res) => {
//res.send({name:"Doni"})
res.sendStatus(200).json({success: true, data: {id:1}});//sending status
})