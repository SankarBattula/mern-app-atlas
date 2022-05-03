import express from "express"
import RestaurantsCtrl from "../controller/RestaurantsCtrl.js"
import ReviewsCtrl from "../controller/ReviewsCtrl.js"

const router = express.Router()

router.route("/").get(RestaurantsCtrl.getRestaurants)
router.route("/id/:id").get(RestaurantsCtrl.getRestaurantById)
router.route("/cuisines").get(RestaurantsCtrl.getRestaurantCuisines)

router
  .route("/review")
  .post(ReviewsCtrl.postReview)
  .put(ReviewsCtrl.updateReview)
  .delete(ReviewsCtrl.deleteReview)



export default router

