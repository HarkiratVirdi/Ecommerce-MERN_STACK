import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from './routes/productRoutes.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
dotenv.config();
const app = express(); 

connectDB();
app.get("/", (req, res) => {
  res.send("API is running");
});


app.use('/api/products', productRoutes);
app.use(notFound);

app.use(errorHandler);


const PORT = process.env.PORT || 5000;
const NODE_ENVIR = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`Server running on ${NODE_ENVIR} at port ${PORT}`.yellow.bold);
});
