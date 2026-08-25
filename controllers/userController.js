export const getAllUsers = (req,res) => {
    res.status(200).json({
        status: "success",
        results : tours.length,
        data : {
            tours
        }

    })
}


export const getUser = (req,res) => {
    const id = req.params.id * 1

    res.status(200).json({
        status : "Success"
    })
}

export const createUser = (req,res) => {
    console.log(req.body)
}

export const updateUser = (req,res) =>{
    res.status(201).json({
        status : "Success"
    })
}

export const deleteUser = (req,res) => {
    res.status(200).json({
        status: "Success"
    })
}

export const deleteAllUsers = (req,res) => {
    res.status(200).json({
        status : "success"
    })
}