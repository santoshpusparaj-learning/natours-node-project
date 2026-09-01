import { Router } from "express"
import {getAllTours,deleteAllTours,getTour,createTour,updateTour,deleteTour} from "../controllers/tourController.js"

const router = Router()

router.route("/").get(getAllTours).delete(deleteAllTours).post(createTour)
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour)

// default export
export default router