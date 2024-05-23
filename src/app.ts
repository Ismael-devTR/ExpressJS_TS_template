import express, { Express} from "express";
const app: Express = express()
import routerHello from "./routes/exampleRoutes.routes";

app.use("/hello", routerHello)


export default app