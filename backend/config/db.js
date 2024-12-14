import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://shamshad1924138:UXSFDMWzsWPffRZR@cluster0.uzfcu.mongodb.net/foodDel').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
