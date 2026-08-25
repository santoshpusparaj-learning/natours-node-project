import {Router} from "express"

import {getAllUsers,deleteAllUsers,getUser,createUser,updateUser,deleteUser} from "../controllers/userController.js"

const router = Router()

router.route("/").get(getAllUsers).delete(deleteAllUsers).post(createUser)
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser)

// Default Export
export default router