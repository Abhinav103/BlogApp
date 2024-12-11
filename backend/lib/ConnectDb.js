import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const url = process.env.URI 

const ConnectDb = async () =>{
    try {
        await mongoose.connect(url)
        console.log("Database Connected")
    }
    catch(err) {
        console.log("Some error Occured While Connecting to the Database ", err)
    }
};
export default ConnectDb;
