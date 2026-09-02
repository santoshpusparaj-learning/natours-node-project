import { Tour } from "../models/tourModel.js";
import { APIFeatures } from "../utility/api-features.js";

export const getAllTours = async (req, res) => {
  try {
    // const queryObj = { ...req.query };

    // //1. Filtering
    // const excludedFields = ["page", "limit", "sort", "fields"];
    // excludedFields.forEach((el) => delete queryObj[el]);

    // //2. Advanced Filtering
    // let queryStr = JSON.stringify(queryObj);
    // queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    // let query = Tour.find(JSON.parse(queryStr));

    // //3. Soring
    // if (req.query.sort) {
    //   query = query.sort(req.query.sort);
    // } else {
    //   query = query.sort("-createdAt");
    // }

    // //4. Fields Limiting
    // if (req.query.fields) {
    //   const field = req.query.fields.split(",").join(" ");
    //   query = query.select(field);
    // } else {
    //   query = query.select("-__v");
    // }

    // //5. Pagination
    // const page = req.query.pages * 1 || 1;
    // const limit = req.query.limit * 1 || 1;
    // const skip = (page - 1) * limit;
    // query = query.skip(skip).limit(limit);

    // if (req.query.pages) {
    //   const totalTour = await Tour.countDocuments();
    //   if (skip > totalTour) throw new Error("Page does not exist");
    // }

    const features = new APIFeatures(Tour.find(JSON.parse(queryStr)), req.query)
      .filter()
      .sort()
      .limit()
      .paginate();
    const tours = await features.query;

    res.status(200).json({
      status: "success",
      count: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: {
        err,
      },
    });
  }
};

export const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: {
        err,
      },
    });
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
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      error: {
        err,
      },
    });
  }
};

export const deleteTour = async (req, res) => {
  try {
    const deleteTour = await Tour.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Deleted successfully !",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      err,
    });
  }
};

export const deleteAllTours = async (req, res) => {
  try {
    const deleteTours = await Tour.deleteMany({});

    res.status(200).json({
      status: "success",
      message: "All documents are deleted successfully !",
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: {
        err,
      },
    });
  }
};
