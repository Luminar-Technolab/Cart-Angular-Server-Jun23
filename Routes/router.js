const express = require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const wishlistController = require('../Controllers/wishlistController')
const cartController = require('../Controllers/cartController')

const router = new express.Router()

//get all products
router.get('/products/all',productController.getAllProductsController)
//register
router.post('/user/register',userController.registerController)
//login
router.post('/user/login',userController.loginController)
//getproduct
router.get('/product/get/:id',productController.getProductController)
//addtowishlist
router.post('/wishlist/add',jwtMiddleware,wishlistController.addTowishlistController)
//getwishlist
router.get('/wishlist/get-allproducts',jwtMiddleware,wishlistController.getWishlistController)
//removewishlist
router.delete('/wishlist/remove/:id',jwtMiddleware,wishlistController.removeWishlistItemController)
//addtocart
router.post('/cart/add',jwtMiddleware,cartController.addtocartController)
//getcart
router.get('/cart/get-all-products',jwtMiddleware,cartController.getCartController)
//increment cart
router.get('/cart/increment/:id',jwtMiddleware,cartController.incrementCartController)
//decrement cart
router.get('/cart/decrement/:id',jwtMiddleware,cartController.decrementCartController)
//remove cart item
router.delete('/cart/remove/:id',jwtMiddleware,cartController.removeCartItemController)
//emptycart
router.delete('/cart/empty',jwtMiddleware,cartController.emptyCartController)

module.exports = router