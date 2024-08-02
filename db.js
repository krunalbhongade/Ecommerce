
import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-d7af5m8-shard-00-00.w8yfkdn.mongodb.net:27017,ac-d7af5m8-shard-00-01.w8yfkdn.mongodb.net:27017,ac-d7af5m8-shard-00-02.w8yfkdn.mongodb.net:27017/?ssl=true&replicaSet=atlas-32h0rl-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommrce-web`
    // const URL = `mongodb://${username}:${password}@ecommerce-web-shard-00-00.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-01.wnaj9.mongodb.net:27017,ecommerce-web-shard-00-02.wnaj9.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-sjmqa0-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
     await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
      console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default Connection;