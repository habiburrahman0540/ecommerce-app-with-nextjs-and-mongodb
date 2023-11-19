import mongoose from "mongoose";
const connection = {};

export const dbConnection =async()=>{
        if(connection.isConnected){
            console.log("Already connected to database.");
            return;
        }
        if(mongoose.connections.length > 0){
            connection.isConnected = mongoose.connections[0].readyState;
            if(connection.isConnected === 1){
                console.log("Use prvious connection to the database");
                return;
            }
            await mongoose.disconnect();
        }
        const dbConnect = await mongoose.connect(process.env.MONGO_DB,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("New connection with DB.");
        connection.isConnected = dbConnect.connections[0].readyState;
}
const disconnectDB= async()=>{
    if(connection.isConnected){
        if(process.env.NODE_ENV === "production"){
           await mongoose.disconnect();
            connection.isConnected =false;
        }else{

        }
    }
}
const db = {dbConnection,disconnectDB};
export default db;