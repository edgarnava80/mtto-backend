import { Request, Response, NextFunction } from "express"
import vehicles from "../AllVehicles"
import Vehicle from "../models/vehicle"

const getAllVehicles = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "exito",
    results: vehicles.length,
    vehicles
  })
}

const createVehicleManteinance = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const newVehicleManteinance = await Vehicle.create(req.body)

    res.status(201).json({
      status: "success",
      vehicleManteinance: newVehicleManteinance
    }) // 201 = Created
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    })
  }
}

export default { getAllVehicles, createVehicleManteinance }
