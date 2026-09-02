import mongoose from "mongoose";

const TourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have the name"],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, "A tour must have duration"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A tour must have the price"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "Tour must have group size"],
  },
  difficulty: {
    type: String,
    required: [true, "Tour must have diffculty"],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, "A tour must have a description"],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, "A tour must have a cover image"],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

export const Tour = mongoose.model("Tour", TourSchema);
