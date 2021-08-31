import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import router from './routes/index.js';
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({
    limit: "15mb",
    extended: true
}));
app.use("/", router);

const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((err) => console.log(err.message));
mongoose.set("useFindAndModify", false);