import express from "express"

import vehicleController from "../controllers/vehicleController"

const router = express.Router()

router.route("/").get(vehicleController.getAllVehicles)

export = router
