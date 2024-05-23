import { Router} from "express"
import {helloWorld} from "../controllers/helloWorld"

const routerHello: Router = Router()

routerHello.get("/", helloWorld)

export default routerHello