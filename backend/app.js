import express from "express"
import UserRouter  from "./routes/User.route.js";
import PostRouter from "./routes/Post.route.js"
import CommentRouter from "./routes/Comment.route.js"
import ConnectDb from "./lib/ConnectDb.js";
import dotenv from "dotenv"
import ClerkRouter from "./routes/webHook.route.js"



dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use("/webhooks" ,ClerkRouter);
app.use(express.json());


app.use("/users", UserRouter)
app.use("/posts",PostRouter)
app.use("/comments",CommentRouter)



// error handling middleware

app.use((err,req,res,next) => {
    res.status(err.status || 500).json({
        message:err.message,
        status:err.status
    })
})

app.listen(port,() => {
    ConnectDb();
    console.log("Starting the Http server on Port  ", port)
})


