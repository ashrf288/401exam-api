
const axios = require('axios');

let getData=(req,res)=>{
   axios.get(`https://crypto-explorer.herokuapp.com/crypto-list/`).then(resp=>{
       res.send(resp.data)
   })
}

module.exports=getData