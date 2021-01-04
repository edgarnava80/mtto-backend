import mongoose from "mongoose"

const vehicleSchema = new mongoose.Schema({
  person: {
    type: String,
    required: [true, "Please provide your full name."]
  },
  deliveryDate: {
    type: Date,
    required: [true, "Please provide a valid date."]
  },
  vehicleId: {
    type: Number,
    required: [true, "The vehicle id must be provided."]
  }
})

const Vehicle = mongoose.model("Vehicle", vehicleSchema)

export default Vehicle
