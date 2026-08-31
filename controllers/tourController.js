import { Tour } from "../models/tourModel";

export const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
};

export const getTour = (req, res) => {
  const id = req.params.id * 1;

  res.status(200).json({
    status: "Success",
  });
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

export const updateTour = (req, res) => {
  res.status(201).json({
    status: "Success",
  });
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

//Utility function that will check whether the ID will be valid
export const checkId = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};
