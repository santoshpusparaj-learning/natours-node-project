import { Router } from "express"
import {getAllTours,deleteAllTours,getTour,createTour,updateTour,deleteTour,checkId,checkBody} from "../controllers/tourController.js"

const router = Router()

router.param("id",checkId)

router.route("/").get(getAllTours).delete(deleteAllTours).post(checkBody,createTour)
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour)

// default export
export default router