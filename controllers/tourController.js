export const getAllTours = (req,res) => {
    res.status(200).json({
        status: "success",
        results : tours.length,
        data : {
            tours
        }

    })
}

export const getTour = (req,res) => {
    const id = req.params.id * 1

    res.status(200).json({
        status : "Success"
    })
}

export const createTour = (req,res) => {
    console.log(req.body)
}

export const updateTour = (req,res) =>{
    res.status(201).json({
        status : "Success"
    })
}

export const deleteTour = (req,res) => {
    res.status(200).json({
        status: "Success"
    })
}

export const deleteAllTours = (req,res) => {
    res.status(200).json({
        status : "success"
    })
}

//Utility function that will check whether the ID will be valid
export const checkId = (req,res,next,val) => {
    if (req.params.id * 1 > tours.length){
        return res.status(404).json({
            status : "fail",
            message : "Invalid ID"
        })
    }
    next();
}

//Utility Function that check whether req.body contains enough mandatory fields
export const checkBody = (req,res,next) => {
    const {name, price} = req.body

    if (!name || !price ) {
        return res.status(404).json({
            status : "fail",
            message : "Name and Price property is missing.."
        })
    }

    next()
}