const cors = require('cors')
const express = require('express')
const app = express()
const axios = require("axios")



app.use(cors())

app.get('/', async (req,res) => {

        try {
            // response é a resposta do axios, porém tiramos o data de dentro
            const {data} = await axios('https://jsonplaceholder.typicode.com/users')
            return res.json(data)
      } catch (error) {
            console.log(error);
            
        }



    

})

app.listen('4567')
