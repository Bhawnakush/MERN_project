const mongose=require('mongoose')

const connectDatabase=()=>{
    mongose.connect(process.env.DB_URI,{useNewUrlParser:true}).then((data)=>{
        console.log(`mongodb connected with server:${data.connection.host}`)}).catch((err)=>{
            console.log(err)
        
    })
    
}
module.exports=connectDatabase;