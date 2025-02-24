const express = require('express')
const router = express.Router()
const {createCategory,getCategories,deleteCategory,updateCategory, getCategoriesbyID} = require('../controllers/CategoryController')

router.post('/categories', createCategory);
router.get('/categories', getCategories);
router.delete('/categories/:id', deleteCategory);
router.put('/categories/:id', updateCategory);
router.get('/categories/:id', getCategoriesbyID)


module.exports = router