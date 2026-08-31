import mongoose from "mongoose"

const TourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have the name"],
    unique: true
  },
  rating: {
    type: Number,
    required: [true, "A tour must have the rating"],
    default: 4.5
  },
  price: {
    type: Number,
    required : [true, "A tour must have the price"]
  }
})

export const Tour = mongoose.model('Tour',TourSchema)