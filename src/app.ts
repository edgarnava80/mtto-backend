import express, { Application, Request, Response, NextFunction } from "express"
import bodyParser from "body-parser"
import morgan from "morgan"

import vehicleRouter from "./routes/vehicleRoutes"

const app: Application = express()

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE")
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use("/api/v1/vehicles", vehicleRouter)

export default app
