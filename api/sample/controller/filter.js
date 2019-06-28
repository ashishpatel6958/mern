import Dishes from "../../models/dishes";

const filter = (req, res) => {
	const { restaurantId, mealId } = req.params;
	getDishes(restaurantId, mealId)
		.then(dishes => {
			res.send({ status: 200, data: dishes });
		})
		.catch(error => {
			res.status(500).send({ status: 500, error: error.message });
		});
};

const getDishes = (restaurantId, mealId) => {
	return Dishes.find({ restaurant: restaurantId, meals: mealId });
};

export default filter;
