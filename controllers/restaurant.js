import Restaurant from '../models/restaurant.js'

export const createRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body)
    await restaurant.save()
    res.status(201).json(restaurant)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find()
    res.status(200).json(restaurants)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id)
    res.status(200).json(restaurant)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const updateRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(restaurant)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const deleteRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id)
    res.status(200).json(restaurant)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const restaurantRecommendation = async (req, res) => {
  try {
    const { style, vegetarian,  } = req.body
    const restaurants = await Restaurant.find({
      vegetarian: vegetarian,
      style: style,
    })
    res.status(200).json(restaurants)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}