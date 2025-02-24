const express = require('express')
const {createBlog, updateBlog, getBlogById,deleteBlog, getBlog} = require('../controllers/BlogController')
const router = express.Router();


router.post('/', createBlog)
router.get('/', getBlog)
router.put('/:id', updateBlog)
router.get('/:id', getBlogById)
router.delete('/:id', deleteBlog)

module.exports = router