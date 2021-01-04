import dotenv from "dotenv"
dotenv.config({ path: "./.env" })

import app from "./app"

//  START SERVER
const port: string | number = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`App running on port: ${port}`)
})
