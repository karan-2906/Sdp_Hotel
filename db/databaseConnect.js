const mongoose =require('mongoose');

const connection = async () => {    
    try{
        await mongoose.connect(process.env.URL,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log('Mongo DB is 💝')
    }catch(er){
        console.log('failed connection',er)
    }
};  

module.exports = connection;