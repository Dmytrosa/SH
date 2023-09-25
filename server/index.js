import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import fileUpload from 'express-fileupload';

const PORT = 3500;
const DB_URL = `mongodb+srv://user:user@cluster0.syhgvjp.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Додайте PUT до списку дозволених методів
    res.header("Access-Control-Allow-Credentials", "true"); // Включіть credentials
    next();
});
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/', 
  }));
app.use('/api', router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()