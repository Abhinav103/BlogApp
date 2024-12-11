import  Webhook  from "./file.cjs";
import UserModel from "../models/User.model.js"

export  const ClerkWebHook = async (req,res) => {
    const secret = process.env.CLERK_WEBHOOK
    const body = req.body;
    const headers = req.headers;
    const obj = new Webhook(secret);
    let event;
    try {
        event = obj.verify(body,headers);
        console.log("clerk signature  sucessfully verified ")
    }catch (error) {
        console.log("Verfication failed some error occured ", error)
    }

   if(event.type === "user.created") {
        const  fullName = [event.data.first_name,event.data.last_name].join(" ")
        const newUser = new UserModel({
            clerkId:event.data.id,
            username:event.data.username,
            name:fullName,
            email:event.data.email_addresses[0].email_address,
            ProfileImage:event.data.profile_image_url

        })

        await newUser.save();
   }

   if(event.type === "user.deleted") {
        await UserModel.deleteOne({clerkId:event.data.id})
        console.log("user deleted ")
   }

   if(event.type === "user.updated") {
        const  fullName = [event.data.first_name,event.data.last_name].join(" ")
        await UserModel.findOneAndUpdate({clerkId:event.data.id},
            {
                username:event.data.username,
                name:fullName,
                email:event.data.email_addresses[0].email_address,
                ProfileImage:event.data.profile_image_url
            }, {new:true}
        )
   }
   res.status(200).json({
        message:"Web Hook data recieved from the clerk "
   })
}; 

