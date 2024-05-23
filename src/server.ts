import dotEnv from "dotenv"
import app from "./app";
dotEnv.config()

const PORT = process.env.PORT


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})
