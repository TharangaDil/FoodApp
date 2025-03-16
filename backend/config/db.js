import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tharanga:damesh1992@cluster0.fikk7.mongodb.net/food-del').then(()=>console.log("DB connected"));
    
}