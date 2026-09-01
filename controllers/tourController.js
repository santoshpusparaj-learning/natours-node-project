import { Tour } from "../models/tourModel.js";

export const getAllTours = async (req, res) => {
  try{
    const tours = await Tour.find()
    res.status(200).json({
      "status" : "success",
      data: {
        tours
      }
    })
  } catch(err) {
    res.status(400).json({
      "status" : "failed",
      "error" : {
        err
      }
    })
  }
};

export const getTour = async (req, res) => {
  try{
    const tour = await Tour.findById(req.params.id)

    res.status(200).json({
      "status" : "success",
      data : {
        tour
      }
    })
  } catch(err){
    res.status(400).json({
      "status" : "failed",
      error : {
        err
      }
    })
  }
  
};

export const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "Success",
      message: {
        newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: "Invalid Data Sent",
    });
  }
};

export const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    res.status(200).json({
      "status" : "success",
      "data" : {
        tour
      }
    })
  }
  catch(err) {
    res.status(400).json({
      "status" : "failed",
      "error" : {
        err
      }
    })
  }
};

export const deleteTour = (req, res) => {
  res.status(200).json({
    status: "Success",
  });
};

export const deleteAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
